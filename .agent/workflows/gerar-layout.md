---
description: gerar-layout
---

# Instrucoes

Voce vai criar a especificacao visual completa da pagina: design system, arquitetura de componentes, animacoes e comportamento. O resultado e um `layout.md` tao detalhado que um desenvolvedor consegue construir a pagina inteira lendo apenas este arquivo.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Le a copy aprovada
- Consulta a referencia criativa como inspiracao
- Cria o `layout.md` com especificacao completa (design system + componentes + animacoes)
- Salva o arquivo na pasta da pagina

Este workflow NAO:
- Escreve HTML, CSS ou JavaScript
- Cria prototipos visuais
- Implementa nada

---

## Etapa 1: Coletar Materiais

### Identificar a Pasta da Pagina

Identifique em qual pasta da pagina voce esta trabalhando. A pasta foi criada pelo `/gerar-copy`.

**IMPORTANTE:** Pastas com prefixo `_backup_` sao versoes antigas — IGNORE-AS.

### Ler a Copy

Leia o arquivo `copy.md` na pasta da pagina. Este e o conteudo textual que voce vai traduzir em especificacao visual.

Se o `copy.md` nao existir, informe ao usuario que ele precisa rodar `/gerar-copy` primeiro.

### Consultar Referencia Criativa

Leia a skill `creative-reference` (`.agent/skills/creative-reference/SKILL.md`). Use como catalogo de INSPIRACAO:
- Arquetipos de composicao (70+ opcoes)
- Constraints criativos (100+ opcoes)
- Font pairings curados (35+ combinacoes em 5 categorias)

Voce NAO esta restrito ao catalogo. Use-o como ponto de partida para escolhas mais ousadas e especificas.

### Perguntar ao Usuario

Antes de comecar, pergunte:
1. Tem referencias visuais? (sites, imagens, mood boards)
2. Qual o tom desejado? (luxo, tech, editorial, brutalist, organico, etc.)
3. Alguma restricao especifica? (cores da marca, fontes obrigatorias, etc.)

---

## Etapa 2: Definir a Identidade Estetica

Antes de qualquer especificacao, defina a **Aesthetic Identity** do projeto em 2-3 palavras. Essa identidade guia TODAS as decisoes visuais.

Exemplos:
- "High-End Organic Tech"
- "Clinical Boutique"
- "Brutalist Editorial"
- "Warm Minimalist Craft"
- "Dark Cinematic Luxury"
- "Swiss Poster Modern"

Declare: **"Aesthetic Identity: [NOME]"**

Em seguida, escreva uma frase descritiva que capture a essencia visual (ex: "O site deve parecer uma ponte entre um laboratorio de pesquisa biologica e uma revista de luxo avant-garde").

---

## Etapa 3: Escrever o Layout.md

O layout.md deve seguir EXATAMENTE esta estrutura. Cada secao e obrigatoria.

### Estrutura Obrigatoria

```markdown
# Layout - [Nome do Projeto]

**Aesthetic Identity:** [Nome] — [Frase descritiva]

---

## 1. CORE DESIGN SYSTEM

### Palette
- **Primary:** #XXXXXX — [nome descritivo] — [quando usar]
- **Accent:** #XXXXXX — [nome descritivo] — [quando usar]
- **Background:** #XXXXXX — [nome descritivo] — [quando usar]
- **Text/Dark:** #XXXXXX — [nome descritivo] — [quando usar]
- [Cores adicionais se necessario]

### Typography
- **Headings:** "[Fonte]" [peso] — [tracking se especifico]
- **Body:** "[Fonte]" [peso] — [line-height se especifico]
- **Drama/Emphasis:** "[Fonte]" [peso/estilo] — [quando usar]
- **Data/Monospace:** "[Fonte]" — [quando usar, se aplicavel]

### Visual Texture
- [Texturas globais: noise overlay, grain, gradientes, etc.]
- **Border-radius system:** [valores]
- **Shadow system:** [valores]
- **Spacing base:** [8px grid, etc.]

---

## 2. COMPONENT ARCHITECTURE & BEHAVIOR

### A. NAVBAR ([Subtitulo Evocativo])
**Visuals:** [Descricao visual]
**Layout:** [Posicionamento, estrutura]
**Morphing Logic:** [Comportamento ao scroll]
**Responsividade:** [Adaptacao mobile]

### B. HERO SECTION ([Subtitulo Evocativo])
**Visuals:** [Altura, background, imagens, overlays, gradientes]
**Layout:** [Posicionamento do conteudo, grid]
**Typography:** [Tamanhos exatos, contrastes, hierarquia]
**Animation:** [Biblioteca, propriedades, timing, easing, trigger]
**Interaction:** [Hover, cursor, scroll behavior]
**Responsividade:** [Adaptacoes mobile/tablet]

### C-Z. [CADA SECAO DO COPY]
[Mesma estrutura detalhada para cada secao]

### FOOTER
[Especificacao completa]

---

## 3. TECHNICAL REQUIREMENTS
- **Bibliotecas CDN:** [Lista com URLs exatas]
- **Micro-interacoes globais:** [Hovers, transicoes de botao, etc.]
- **Diretiva de qualidade:** [Padrao de execucao]
```

### Regras de Especificacao

#### Nivel de Detalhe OBRIGATORIO

Para CADA componente, voce DEVE especificar:

**Visuals** — Nao diga "fundo escuro". Diga: "Background #1A1A1A com noise overlay SVG turbulence a 0.05 opacity. Imagem de fundo (URL) com gradient overlay linear-gradient(to bottom, rgba(46,64,54,0.8), rgba(26,26,26,0.95))."

**Layout** — Nao diga "conteudo a esquerda". Diga: "Conteudo posicionado no terco inferior-esquerdo. Grid de 12 colunas, conteudo ocupa colunas 1-5. Padding: 80px lateral, 120px inferior."

**Typography** — Nao diga "titulo grande". Diga: "Headline em Plus Jakarta Sans 800, 72px desktop / 40px mobile. Subheadline em Cormorant Garamond Italic 300, 24px, letter-spacing 0.02em. Contraste de escala: headline 3x maior que subheadline."

**Animation** — Nao diga "animacao de entrada". Diga: "GSAP staggered fade-up: opacity 0→1, y: 40→0, duration 0.8s, ease power3.out, stagger 0.15s entre elementos. Trigger: ao carregar a pagina (hero) ou ao entrar no viewport (demais secoes)."

**Interaction** — Nao diga "hover no botao". Diga: "Hover: scale 1.02 com transition 0.3s cubic-bezier(0.34, 1.56, 0.64, 1). Background: sliding layer da esquerda usando pseudo-element ::before com width 0→100%. Efeito magnetico: botao se desloca 4px na direcao do cursor."

**Responsividade** — Nao diga "adapta para mobile". Diga: "Mobile (375px): Headline 40px, grid single-column, padding 24px. Navbar: hamburger menu com overlay fullscreen. Hero: 100svh, conteudo centralizado. Cards: stack vertical com gap 16px."

#### Subtitulos Evocativos

Cada componente deve ter um subtitulo que capture sua essencia:
- Navbar: "The Floating Island"
- Hero: "Nature is the Algorithm"
- Features: "The Precision Dashboard"
- Pricing: "The Architecture of Access"

Isso guia o tom da implementacao e cria identidade.

#### Imagens

Quando a especificacao pedir imagens:
- Busque URLs reais do Unsplash que se encaixem na estetica
- Descreva a imagem: "Foto aerea de floresta densa com neblina matinal, tons verdes escuros"
- O desenvolvedor vai baixar para `/images/` e usar via CDN Netlify
- NUNCA dependa de imagens geradas por IA

#### Componentes Interativos

Para componentes com interatividade complexa, descreva o COMPORTAMENTO EXATO:
- Cards que se embaralham: "3 cards sobrepostos. A cada 3 segundos, o card do fundo sobe para o topo com transicao spring cubic-bezier(0.34, 1.56, 0.64, 1) duracao 0.6s."
- Typewriter: "Texto ciclando entre 3 frases com cursor piscante #CC5833. Velocidade: 50ms por caractere, pausa de 2s entre frases."
- Mock cursor: "SVG cursor animado que entra pela direita, move ate o elemento X em 1.2s com ease power2.inOut, clica (scale down 0.9 por 100ms), depois move para 'Salvar' e fade out."

---

## Etapa 4: Elementos Encantadores

Apos especificar todos os componentes, adicione uma secao de "Detalhes de Craft":

- **Transicoes entre secoes:** Como as secoes se conectam visualmente (cor, forma, scroll behavior)
- **Micro-interacoes unicas:** Detalhes que surpreendem (ex: texto que reage ao cursor, status indicator com pulsing dot)
- **Easter eggs visuais:** Detalhes sutis que recompensam atencao (ex: textura que muda levemente ao scroll, sombra que acompanha hora do dia)

---

## Etapa 5: Entregar

1. Salve o `layout.md` na pasta da pagina
2. Apresente um resumo ao usuario:
   - Aesthetic Identity escolhida
   - Paleta de cores
   - Font pairing
   - Numero de componentes especificados
   - Bibliotecas necessarias
   - Destaques criativos
3. Pergunte se quer ajustar algo
4. Sugira a proxima etapa: "Quando o layout estiver aprovado, use `/desenvolver` para construir a pagina."

---

## Lembretes Finais

### Stack Tecnica

A pagina sera construida em HTML/CSS/JS puros. Ao especificar animacoes e comportamentos, referencie:
- **GSAP** (via CDN) para animacoes complexas e ScrollTrigger
- **CSS** para transicoes, hovers, media queries
- **Vanilla JS** para logica de interacao
- **Three.js** (via CDN) se precisar de 3D/WebGL
- **Lenis** (via CDN) se smooth scroll for especificado
- **AOS** (via CDN) para animacoes simples de scroll

NAO referencie React, Vue, Tailwind, npm ou qualquer ferramenta que exija build.

### Qualidade do Layout.md

O layout.md e a UNICA referencia que o desenvolvedor tera. Se algo nao esta especificado, sera inventado. Se esta vago, sera simplificado. Seja exaustivo e preciso.

**Teste mental:** Leia cada especificacao e pergunte: "Um desenvolvedor que nunca viu este projeto conseguiria implementar EXATAMENTE o que eu imagino lendo apenas isto?" Se a resposta for nao, detalhe mais.

### O Que NUNCA Fazer

- NUNCA use linguagem vaga ("animacao legal", "efeito bonito", "layout moderno")
- NUNCA omita valores (cores, tamanhos, duracoes, easings)
- NUNCA deixe um componente sem especificacao de responsividade
- NUNCA deixe um componente interativo sem descricao de estados
- NUNCA crie um hero estatico sem animacao (mesmo que sutil)
- NUNCA use padroes genericos (3 cards lado a lado, grid simetrico de features)
- NUNCA copie o exemplo desta instrucao literalmente (cada projeto e unico)

---

## GATILHO DE PARADA OBRIGATORIA (SOCRATIC GATE)

**VOCE ATINGIU O FIM DESTE WORKFLOW. PROSSIGA COM EXTREMA CAUTELA:**

1. E **ESTRITAMENTE PROIBIDO** iniciar o proximo workflow (`/desenvolver`) ou comecar a escrever codigo (HTML/CSS/JS) por conta propria.
2. Voce DEVE devolver o controle ao usuario IMEDIATAMENTE apos a mensagem de conclusao.
3. Mesmo que o usuario diga "OK", "Aprovado" ou "Pode continuar", voce **NAO DEVE** iniciar o proximo passo. Apenas responda confirmando que esta pronto e **EXIJA** que ele digite explicitamente o comando `/desenvolver`.
4. **PARE A GERACAO DE TEXTO AQUI.**
