# Layout - NPS TraQ!

**Aesthetic Identity:** Immersive Conversational Flow — A experiencia deve parecer uma conversa fluida e imersiva, onde cada pergunta ocupa toda a tela como no Typeform. Fundo escuro (azul-petroleo da marca) com destaques vibrantes (amarelo), transicoes cinematicas entre etapas, e foco total na interacao. Zero distracao, maximo engajamento.

---

## 1. CORE DESIGN SYSTEM

### Palette
- **Primary / Background:** #03243E — Azul-petroleo — Fundo principal de toda a aplicacao, transmite confianca e profundidade
- **Accent:** #F1E41A — Amarelo-vibrante — Botoes de acao, indicadores de progresso, elementos selecionados, destaques de interacao
- **Surface:** #0A3A5C — Azul medio — Cards de opcao e areas interativas (botoes NPS, opcoes de experiencia)
- **Surface Hover:** #0D4A72 — Azul claro — Estado hover dos cards e botoes
- **Text Primary:** #FFFFFF — Branco — Titulos e texto principal sobre fundo escuro
- **Text Muted:** rgba(255,255,255,0.55) — Branco translucido — Textos secundarios, subtitulos, labels, indicadores de passo
- **Text Subtle:** rgba(255,255,255,0.3) — Branco sutil — Placeholders, separadores visuais
- **NPS Detractor (0-6):** #EF4444 — Vermelho — Botao selecionado quando nota e 0-6
- **NPS Passive (7-8):** #F1E41A — Amarelo (accent da marca) — Botao selecionado quando nota e 7-8
- **NPS Promoter (9-10):** #10B981 — Verde — Botao selecionado quando nota e 9-10
- **Loyalty Sim:** #10B981 — Verde — Botao "Sim" selecionado
- **Loyalty Talvez:** #F1E41A — Amarelo — Botao "Talvez" selecionado
- **Loyalty Nao:** #EF4444 — Vermelho — Botao "Nao" selecionado
- **Error:** #EF4444 — Vermelho — Feedback de erro
- **Success:** #10B981 — Verde — Feedback de sucesso

### Typography

**Fonte da marca (Mustica) nao esta disponivel no Google Fonts.** Usar substituta geometrica de alta qualidade:

- **Headings:** "Plus Jakarta Sans" 700-800, letter-spacing -0.02em — Geometrica limpa que captura a mesma essencia moderna e precisa da Mustica
- **Body / Labels:** "Plus Jakarta Sans" 400-500 — Mesmo par, pesos leves para body text
- **Step Counter:** "Plus Jakarta Sans" 500 uppercase, letter-spacing 0.1em, font-size 0.8125rem — Estilo badge/tag para indicar progresso
- **NPS Numbers:** "Plus Jakarta Sans" 700, font-size 1.125rem em desktop / 0.9375rem mobile

**Hierarquia Typeform:**
- Pergunta principal: `clamp(1.75rem, 5vw, 2.5rem)` — Grande, impactante, legivel
- Subtitulo/descricao: `1rem` — Muted, segunda hierarquia
- Labels de opcao: `0.875rem` — Dentro dos botoes de opcao
- Step counter: `0.8125rem` — Indicador discreto

### Visual Texture
- **Background:** Fundo solido #03243E. Sem noise, sem texturas — clean como Typeform
- **Gradiente sutil no fundo:** radial-gradient(ellipse at 50% 0%, rgba(10,58,92,0.5) 0%, transparent 60%) — iluminacao sutil no topo, sensacao de profundidade
- **Border-radius system:** 12px (botoes de acao), 16px (cards de opcao), 999px (badges/pills)
- **Shadow system:** Sem sombras. Diferenciacao feita por cor de borda e background, nao por sombra — estetica flat moderna
- **Borders:** 1px solid rgba(255,255,255,0.08) — bordas muito sutis nos cards
- **Border selecionado:** 2px solid [cor-da-categoria] — feedback visual claro ao selecionar
- **Spacing base:** 8px grid. Gaps generosos para respiracao maxima
- **Transicao global:** `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` — Em todos os elementos interativos

---

## 2. COMPONENT ARCHITECTURE & BEHAVIOR

### A. PROGRESS BAR ("The Pulse Line")

**Arquetipo:** Progress Bar + Scroll Progress
**Constraints:** Gradiente Linear, Fixed Element

**Visuals:** Barra fixa no topo da viewport, full-width. Track: `rgba(255,255,255,0.06)` height 3px. Fill: gradiente `linear-gradient(90deg, #F1E41A, #10B981)` — do amarelo da marca ao verde, comunicando progresso positivo.

**Layout:** `position: fixed; top: 0; left: 0; width: 100%; z-index: 100`. Fill width baseado no step atual: step 1 = 20%, step 2 = 40%, step 3 = 60%, step 4 = 80%, step 5 = 100%.

**Animation:** Width animado com `transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1)`. Nao usar delay.

**Responsividade:** Identico em todas as resolutions. Height: 3px sempre.

---

### B. STEP CONTAINER ("The Conversation Frame")

**Arquetipo:** Single Focus + Full Height + Conversational
**Constraints:** Container Narrow, White Space Hero, Contained Center

**Visuals:** Cada step ocupa `100vh` (ou `100dvh` para mobile). Background: #03243E (herdado do body). Conteudo centralizado vertical e horizontalmente, como uma conversa — o usuario foca APENAS na pergunta atual.

**Layout:** `display: flex; flex-direction: column; justify-content: center; align-items: center`. Container interno max-width: 640px. Padding: `clamp(1.5rem, 5vw, 3rem)` lateral, `2rem` vertical.

**Animation — Transicao entre steps:**
- Step saindo: `opacity 1→0, translateY 0→-30px, duration 0.3s, ease power2.in`. Apos completar, `display: none`.
- Step entrando: `display: flex` (com pequeno delay de 50ms), depois `opacity 0→1, translateY 30px→0, duration 0.5s, ease power3.out`.
- Efeito: sensacao de scroll vertical mesmo sem scroll real, identico ao Typeform.

**Responsividade:**
- Desktop: conteudo centralizado com muito espaco negativo (white space generoso)
- Mobile (< 480px): conteudo alinhado ao topo com `padding-top: 15vh` em vez de centralizado verticalmente — evita que o teclado virtual empurre o conteudo para fora da tela quando textarea recebe foco
- `min-height: 100dvh` em vez de `height: 100vh` para lidar com barra de endereco mobile

---

### C. STEP COUNTER ("The Whisper")

**Visuals:** Texto discreto acima da pergunta. Formato: "Pergunta 1 de 5". Cor: `rgba(255,255,255,0.4)`. Font: Plus Jakarta Sans 500, 0.8125rem, uppercase, letter-spacing 0.1em.

**Layout:** Alinhado a esquerda do container de conteudo. `margin-bottom: 1rem`.

**Animation:** Aparece com stagger junto com o titulo: delay 0ms, fade-up sutil `opacity 0→1, y: 10→0, duration 0.4s`.

---

### D. STEP TITLE / QUESTION ("The Voice")

**Visuals:** Pergunta em branco puro #FFFFFF. Font: Plus Jakarta Sans 700, `clamp(1.75rem, 5vw, 2.5rem)`. Line-height: 1.3. Letter-spacing: -0.02em.

**Layout:** Alinhado a esquerda. `margin-bottom: 0.75rem` quando tem subtitulo, `margin-bottom: 2rem` quando nao tem.

**Animation:** Fade-up: `opacity 0→1, y: 15→0, duration 0.5s, delay 100ms, ease power3.out`.

---

### E. STEP SUBTITLE ("The Context")

**Visuals:** Texto complementar em rgba(255,255,255,0.55). Font: Plus Jakarta Sans 400, 1rem. Line-height: 1.6.

**Layout:** Alinhado a esquerda. `margin-bottom: 2rem`.

**Animation:** Fade-up: `opacity 0→1, y: 15→0, duration 0.5s, delay 200ms, ease power3.out`.

---

### F. NPS SCALE 0-10 ("The Spectrum")

**Arquetipo:** Gamified + Reactive
**Constraints:** Color Blocking, Hover Scale, Hover Glow

**Visuals:** 11 botoes numericos (0-10) em grid horizontal. Cada botao: background #0A3A5C, border 1px solid rgba(255,255,255,0.08), border-radius 12px, aspect-ratio 1 (quadrado). Font: Plus Jakarta Sans 700, 1.125rem, cor rgba(255,255,255,0.7).

**Layout:** `display: grid; grid-template-columns: repeat(11, 1fr); gap: 0.5rem`. Labels "Nada provavel" / "Muito provavel" abaixo em rgba(255,255,255,0.3), 0.75rem, flex justify-content space-between.

**Interaction:**
- Hover: `background #0D4A72, border-color rgba(255,255,255,0.15), transform translateY(-3px), transition 0.2s ease`.
- Selecao (0-6 detractor): `background #EF4444, border-color #EF4444, color #fff, box-shadow 0 0 30px rgba(239,68,68,0.3)`.
- Selecao (7-8 passive): `background #F1E41A, border-color #F1E41A, color #03243E, box-shadow 0 0 30px rgba(241,228,26,0.3)`.
- Selecao (9-10 promoter): `background #10B981, border-color #10B981, color #fff, box-shadow 0 0 30px rgba(16,185,129,0.3)`.
- Ao selecionar, TODOS os outros botoes reduzem opacidade para 0.4 — foco visual no selecionado.
- Animacao de selecao: `transform: scale(1.1)` por 150ms, depois volta a `scale(1)` — micro-feedback tatil.

**Animation:** Botoes aparecem em stagger da esquerda para direita: `opacity 0→1, y: 10→0, stagger 40ms entre cada, delay 300ms, duration 0.3s`.

**Responsividade Mobile (< 480px):**
- Grid muda para `grid-template-columns: repeat(6, 1fr)` — duas linhas (6+5)
- Gap: 0.5rem
- Font-size: 0.9375rem
- Os botoes restantes (5) ficam centralizados na segunda linha

---

### G. TEXTAREA ("The Open Canvas")

**Visuals:** Textarea com background `rgba(255,255,255,0.04)`, border 1px solid `rgba(255,255,255,0.1)`, border-radius 16px. Padding: 1.25rem. Font: Plus Jakarta Sans 400, 1rem. Color: #FFFFFF. Placeholder: `rgba(255,255,255,0.25)`. Min-height: 140px. Resize: vertical.

**Layout:** Width 100% do container. `margin-bottom: 0`.

**Interaction:**
- Focus: `border-color #F1E41A, box-shadow 0 0 0 3px rgba(241,228,26,0.15)`. Transicao suave de 0.2s.
- Hover (sem focus): `border-color rgba(255,255,255,0.18)`.
- Error state: `border-color #EF4444`.
- O botao "Proximo" habilita em tempo real conforme o usuario digita (nao precisa blur).

**Animation:** Fade-up: `opacity 0→1, y: 15→0, duration 0.5s, delay 300ms`.

**Responsividade Mobile:** Min-height: 120px. Font-size mantido em 1rem (evita zoom automatico em iOS com font < 16px).

---

### H. EXPERIENCE SCALE ("The Mood Board")

**Arquetipo:** Gamified + Reactive
**Constraints:** Hover Lift, Selective Color

**Visuals:** 5 cards verticais em grid horizontal. Cada card: background #0A3A5C, border 1px solid rgba(255,255,255,0.08), border-radius 16px. Conteudo: emoji (2rem) + label embaixo (0.75rem, rgba(255,255,255,0.5), font-weight 500). Padding: 1.5rem 0.5rem.

**Layout:** `display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.625rem`.

**Labels e emojis:**
1. Muito ruim — face triste
2. Ruim — face levemente triste
3. Regular — face neutra
4. Boa — face sorridente
5. Muito boa — face feliz

**Interaction:**
- Hover: `background #0D4A72, transform translateY(-3px), border-color rgba(255,255,255,0.15)`.
- Selecionado: `background rgba(241,228,26,0.08), border 2px solid #F1E41A, box-shadow 0 0 25px rgba(241,228,26,0.12)`. Label muda para `color #F1E41A`. Emoji ganha `transform: scale(1.15)`.
- Cards nao selecionados: `opacity 0.4` quando ha um selecionado.
- Micro-animacao ao selecionar: emoji faz `scale(1.3)` por 200ms com `ease: cubic-bezier(0.34, 1.56, 0.64, 1)` (overshoot), depois volta a `scale(1.15)`.

**Animation:** Cards aparecem em stagger: `opacity 0→1, y: 10→0, stagger 60ms, delay 300ms, duration 0.4s`.

**Responsividade Mobile (< 480px):**
- Grid mantido em 5 colunas, mas com gap menor (0.375rem)
- Padding interno do card: 1rem 0.25rem
- Emoji: 1.5rem
- Label: 0.625rem

---

### I. LOYALTY OPTIONS ("The Verdict")

**Arquetipo:** Gamified + Reactive
**Constraints:** Color Blocking, Hover Lift, Selective Color

**Visuals:** 3 cards verticais em grid horizontal. Cada card: background #0A3A5C, border 1px solid rgba(255,255,255,0.08), border-radius 16px. Conteudo: icone SVG (28px, stroke, opacity 0.4) + label (0.9375rem, font-weight 600). Padding: 2rem 1rem.

**Layout:** `display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem`.

**Icones:**
- Sim: Checkmark (Lucide check)
- Talvez: Question mark circle (Lucide help-circle)
- Nao: X mark (Lucide x)

**Interaction:**
- Hover: `background #0D4A72, transform translateY(-3px), border-color rgba(255,255,255,0.15)`.
- Selecionado "Sim": `background rgba(16,185,129,0.08), border 2px solid #10B981, box-shadow 0 0 25px rgba(16,185,129,0.15)`. Icone: `color #10B981, opacity 1`.
- Selecionado "Talvez": `background rgba(241,228,26,0.08), border 2px solid #F1E41A, box-shadow 0 0 25px rgba(241,228,26,0.15)`. Icone: `color #F1E41A, opacity 1`.
- Selecionado "Nao": `background rgba(239,68,68,0.08), border 2px solid #EF4444, box-shadow 0 0 25px rgba(239,68,68,0.15)`. Icone: `color #EF4444, opacity 1`.
- Cards nao selecionados: `opacity 0.4` quando ha um selecionado.

**Animation:** Cards aparecem em stagger: `opacity 0→1, y: 10→0, stagger 80ms, delay 300ms, duration 0.4s`.

---

### J. NAVIGATION BUTTONS ("The Flow Controls")

**Constraint:** Hover Fill, Hover Glow

**Visuals:**
- **Botao "Proximo":** Background #F1E41A (amarelo da marca), color #03243E (azul da marca), font-weight 600, border-radius 12px, padding 0.875rem 2rem. Icone seta (→) a direita com gap 0.5rem. Font-size: 1rem.
- **Botao "Voltar":** Background transparente, color rgba(255,255,255,0.4), font-weight 500, border-radius 12px, padding 0.875rem 1.25rem. Icone seta (←) a esquerda. Font-size: 0.9375rem. Sem borda.
- **Botao "Enviar Pesquisa":** Mesmo estilo do "Proximo" mas com icone de envio (paper plane). Texto: "Enviar Pesquisa".

**Layout:** `display: flex; justify-content: space-between; align-items: center`. "Voltar" a esquerda, "Proximo"/"Enviar" a direita. `margin-top: 2.5rem`. Width 100%.

**Interaction:**
- "Proximo" hover: `background #fff, box-shadow 0 0 30px rgba(241,228,26,0.25), transform translateY(-2px)`.
- "Proximo" disabled: `opacity 0.3, cursor not-allowed, sem hover effects`.
- "Voltar" hover: `color rgba(255,255,255,0.7), background rgba(255,255,255,0.05)`.
- "Enviar" hover: mesmo que "Proximo".
- Press (active): `transform: scale(0.97)` — feedback tatil.

**Animation:** Botoes aparecem com delay final: `opacity 0→1, duration 0.4s, delay 500ms`.

**Responsividade Mobile (< 480px):**
- Stack vertical: flex-direction column-reverse (Proximo no topo, Voltar embaixo)
- Ambos width 100%, justify-content center
- Gap: 0.75rem
- Votar: order 2 para ficar embaixo

---

### K. KEYBOARD SHORTCUT HINT ("The Whisper Hint")

**Visuals:** Texto sutil abaixo do botao "Proximo" em views de opcao (NPS, experiencia, fidelidade). Formato: "Pressione Enter ↵" ou "Use as teclas 0-9". Cor: rgba(255,255,255,0.2). Font-size: 0.75rem.

**Layout:** Centralizado abaixo do botao Proximo. Margin-top: 0.75rem.

**Interaction:** `display: none` em mobile e touch devices. Apenas desktop.

**Behavior:** Implementar atalhos de teclado:
- Teclas 0-9 e 0 para selecionar nota NPS (step 1)
- Enter para avancar ao proximo step
- Backspace para voltar ao step anterior

---

### L. THANK YOU PAGE ("The Gratitude")

**Arquetipo:** Single Focus + Isolated Element + Breathing
**Constraints:** White Space Hero, Contained Center

**Visuals:** Pagina fullscreen com fundo #03243E. Conteudo centralizado vertical e horizontalmente. Container max-width: 520px.

**Icone de sucesso:** Circulo 80px com `background: linear-gradient(135deg, rgba(16,185,129,0.12), rgba(241,228,26,0.12))`, border-radius 50%. Icone checkmark SVG dentro, cor #10B981, 36px. Animacao: `pulse scale 1↔1.05, duration 2s, ease ease-in-out, infinite`.

**Titulo:** "Feedback recebido!" — Font: Plus Jakarta Sans 800, `clamp(1.75rem, 5vw, 2.25rem)`. Background text: `linear-gradient(135deg, #FFFFFF, #F1E41A)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`.

**Divider:** Linha horizontal 60px, height 3px, `background: linear-gradient(90deg, #F1E41A, #10B981)`, border-radius 999px, centralizada. Margin: 1.5rem auto.

**Mensagem:** 2 paragrafos em rgba(255,255,255,0.55), font-size 1.0625rem, line-height 1.7. Tom caloroso e profissional, agradecendo pelo tempo dedicado.

**Assinatura:** "Com gratidao, Equipe TraQ!" — font-size 0.875rem, rgba(255,255,255,0.3). "Equipe TraQ!" em font-weight 600, rgba(255,255,255,0.5).

**Animation:**
- Icone: `opacity 0→1, scale 0.5→1, duration 0.6s, ease back.out(1.7), delay 200ms`
- Titulo: `opacity 0→1, y 20→0, duration 0.6s, delay 400ms`
- Divider: `width 0→60px, duration 0.5s, delay 600ms`
- Paragrafos: `opacity 0→1, y 15→0, stagger 150ms, delay 800ms`

---

## 3. TECHNICAL REQUIREMENTS

### Bibliotecas CDN
- **Google Fonts:** Plus Jakarta Sans 400, 500, 600, 700, 800
  ```
  https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap
  ```
- **Nenhuma outra biblioteca necessaria** — Todas as animacoes podem ser feitas com CSS transitions/animations puras + Vanilla JS para controle de steps. NAO usar GSAP, AOS ou qualquer outra lib.

### Micro-interacoes globais
- **Todos os botoes interativos:** `transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`
- **Focus visible:** `outline: 2px solid #F1E41A, outline-offset: 3px` — acessibilidade com cor da marca
- **Active (press):** `transform: scale(0.97)` em todos os botoes
- **Selection diminishing:** Ao selecionar qualquer opcao, os nao-selecionados diminuem para `opacity 0.4` com transicao de 0.3s — foco visual imediato

### Atalhos de teclado (UX Typeform)
- **0-9 e 0 (duplo):** Seleciona nota NPS correspondente (step 1)
- **Enter:** Avanca para proximo step (equivale a clicar "Proximo")
- **Shift+Enter (em textarea):** Avanca (Enter normal faz line break no textarea)
- **Backspace:** Volta para step anterior (apenas quando textarea nao esta em foco)

### Diretiva de qualidade
A experiencia deve ser IDENTICA ao Typeform: uma pergunta por tela, transicoes suaves, foco absoluto na interacao, zero distracao visual. O usuario deve sentir que esta tendo uma conversa, nao preenchendo um formulario.

---

## 4. DETALHES DE CRAFT

### Transicoes entre steps
- Transicao cinematica: step atual faz fade-up-out (sobe e desaparece), novo step faz fade-down-in (desce e aparece). Cria sensacao de scroll vertical natural.
- Progress bar e o unico elemento persistente — ancora visual que conecta os steps.
- Duracao total da transicao: ~500ms (300ms saida + 50ms gap + 500ms entrada, com overlap).

### Micro-interacoes unicas
- **NPS glow:** Ao selecionar nota, um glow sutil da cor correspondente (vermelha/amarela/verde) pulsa uma vez no botao selecionado — `box-shadow` animado por 600ms.
- **Emoji bounce:** Na escala de experiencia, o emoji do card selecionado faz um bounce sutil com overshoot (cubic-bezier de spring).
- **Auto-advance:** Nas perguntas de opcao unica (NPS, experiencia, fidelidade), ao selecionar uma opcao, aguardar 600ms e avancar automaticamente para o proximo step. O usuario nao precisa clicar "Proximo" — mas o botao ainda existe como fallback.
- **Textarea auto-focus:** Ao entrar em um step com textarea, o textarea recebe focus automaticamente apos 600ms (tempo da animacao de entrada). Em mobile, NAO fazer auto-focus para evitar abertura indesejada do teclado.

### Sugestao de UX adicional
- **Step 1 (NPS):** Ao selecionar a nota, mostrar um texto sutil abaixo da escala por 400ms: "Obrigado!" e avancar automaticamente.
