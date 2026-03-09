---
description: desenvolver
---

# Instrucoes

Voce vai construir a pagina completa seguindo a especificacao do `layout.md`. Seu trabalho e EXECUTAR fielmente o que foi planejado, sem simplificar ou omitir nada.

## Etapa 1: Carregar a Especificacao

### Identificar a Pasta da Pagina

Identifique em qual pasta da pagina voce esta trabalhando. Os arquivos devem estar dentro da pasta criada pelo `/gerar-copy` (ex: `pagina-vendas/`).

**IMPORTANTE:** Pastas com prefixo `_backup_` sao versoes antigas - IGNORE-AS.

### Arquivos Necessarios

1. Leia o arquivo `layout.md` na pasta da pagina — este contem a especificacao completa (design system + arquitetura de componentes + animacoes)
2. Leia o `copy.md` para referencia dos textos

Se o `layout.md` nao existir, informe ao usuario que ele precisa rodar `/gerar-layout` primeiro.

### Entender a Especificacao

O `layout.md` da v24 e um brief cinematografico completo com:
- **Core Design System:** Paleta, tipografia, texturas globais
- **Component Architecture:** Cada componente com visuals, layout, animacoes, interacoes e responsividade
- **Technical Requirements:** Bibliotecas CDN, micro-interacoes globais

Nao existe prototipo visual previo. Voce constroi TUDO do zero baseado nesta especificacao.

## Etapa 2: Planejar a Execucao

Antes de comecar a codar, liste para o usuario:

1. Quantas secoes serao construidas
2. Bibliotecas externas necessarias
3. Ordem de execucao

## Etapa 3: Construir Secao por Secao

### Processo para cada secao

1. **Releia a especificacao da secao** no `layout.md`
2. **Implemente o HTML** seguindo a estrutura especificada
3. **Implemente o CSS** com TODOS os valores especificados
4. **Implemente interatividade** (hover, animacoes, etc.)
5. **Teste visualmente** antes de passar para a proxima

### Regras de Implementacao

#### HTML
- Use semantica correta (section, article, figure, etc.)
- Adicione `data-aos` onde especificado
- Use classes descritivas e consistentes
- Inclua todos os atributos de acessibilidade

#### CSS
- Siga EXATAMENTE os valores do `layout.md`
- Nao arredonde ou simplifique valores
- Implemente TODOS os estados (hover, active, focus)
- Implemente TODAS as animacoes especificadas
- Responsividade completa (mobile-first)

#### JavaScript (se necessario)
- Adicione no `script.js` existente
- Comente o codigo para clareza
- Evite bibliotecas pesadas quando possivel com vanilla JS

### O que NUNCA fazer

- NUNCA omitir uma animacao porque "da trabalho"
- NUNCA simplificar um efeito porque "e complexo"
- NUNCA pular a responsividade
- NUNCA ignorar estados de hover/focus
- NUNCA usar cores aproximadas (use os hex exatos)
- NUNCA mudar medidas especificadas
- NUNCA remover elementos decorativos

### Se algo nao estiver claro

Se alguma especificacao estiver ambigua:
1. Releia o contexto ao redor no layout.md
2. Considere a Aesthetic Identity e o Design System como referencia
3. Se ainda estiver ambiguo, PERGUNTE ao usuario antes de assumir

## Etapa 4: Checklist de Finalizacao (OBRIGATORIO)

**A tarefa NAO esta completa ate passar por TODOS os itens abaixo.**

### Verificacao de Completude
- [ ] Todas as secoes do `layout.md` foram implementadas?
- [ ] Nenhuma secao foi simplificada ou omitida?
- [ ] Todos os elementos decorativos estao presentes?

### Fidelidade ao Design System
- [ ] Paleta de cores seguida fielmente (hex exatos do layout.md)?
- [ ] Tipografia consistente (fontes, pesos, tamanhos do layout.md)?
- [ ] Texturas visuais aplicadas (noise, border-radius, shadows)?
- [ ] Aesthetic Identity mantida em toda a pagina?
- [ ] Nenhum padrao generico foi introduzido (3 cards, grid simetrico)?

### Imagens
- [ ] Todas imagens usando Netlify CDN (`/.netlify/images?url=...`)
- [ ] Imagens com width/height numericos definidos
- [ ] Pasta `/images/` na raiz do projeto (nao dentro da pasta da pagina)

### Acessibilidade
- [ ] Todos os links/botoes com foco visivel
- [ ] Imagens com alt text descritivo
- [ ] Contraste de cores adequado
- [ ] Hierarquia de headings correta (h1 → h2 → h3)
- [ ] Formulario com labels e atributos corretos

### Responsividade
- [ ] Testado em 375px (mobile)
- [ ] Testado em 768px (tablet)
- [ ] Testado em 1440px (desktop)
- [ ] Nenhum overflow horizontal em nenhuma resolucao
- [ ] Textos legiveis em todas as resolucoes

### Animacoes e Interatividade
- [ ] Todas as animacoes especificadas implementadas
- [ ] Todos os hovers funcionando
- [ ] Transicoes suaves em todos os estados
- [ ] Feedback visual em interacoes
- [ ] Hero SEM animacao de entrada (opacity:0, fade-in, data-aos)
- [ ] AOS inicializado com `disableMutationObserver: true`

### Validacao Final
Antes de informar que esta pronto:
1. **Abra o DevTools** (F12)
2. **Verifique o Console** - nao deve ter erros em vermelho
3. **Verifique o Network** - nao deve ter 404
4. **Teste o formulario** - deve estar configurado corretamente

## Etapa 5: Apresentar ao Usuario

Apos completar:

1. Informe que a pagina esta pronta
2. Liste as secoes construidas
3. Destaque funcionalidades especiais implementadas
4. Forneca o link (use a skill `local-server` para obter a URL correta)
5. Peca feedback

## Bibliotecas Permitidas (CDN)

Se a especificacao pedir, voce pode usar via CDN:

```html
<!-- Icones -->
<script src="https://unpkg.com/@phosphor-icons/web" defer></script>

<!-- Animacoes avancadas (se necessario) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer></script>

<!-- Efeitos especiais (se necessario) -->
<script src="https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.min.js" defer></script>
```

Adicione apenas o que for REALMENTE necessario para a especificacao.

## Lembrete Final

Voce tem uma especificacao detalhada em maos. Seu trabalho e EXECUTAR com precisao, nao reinventar ou simplificar. Se a especificacao pede um efeito de particulas com three.js, implemente. Se pede um carrossel diagonal que ao clicar explode, implemente.

A qualidade da pagina final depende da sua fidelidade a especificacao.

---

## Ao Finalizar

Apos construir todas as secoes:

1. Informe que a pagina esta pronta
2. Liste as secoes construidas
3. Forneca o link (use a skill `local-server` para obter a URL correta)
4. Pergunte se quer ajustar algo
5. Sugira proximos passos: "Quando estiver satisfeito, use `/publicar` para deploy ou `/otimizar` para melhorar performance."

---

## GATILHO DE PARADA OBRIGATORIA (SOCRATIC GATE)

**VOCE ATINGIU O FIM DESTE WORKFLOW. PROSSIGA COM EXTREMA CAUTELA:**

1. E **ESTRITAMENTE PROIBIDO** rodar os workflows `/otimizar` ou `/publicar` automaticamente.
2. Voce DEVE devolver o controle ao usuario IMEDIATAMENTE apos informar que a pagina esta pronta.
3. Mesmo que o usuario diga "Show", "Aprovado" ou "Pode subir", voce **NAO DEVE** fazer deploy. Apenas agradeca e **EXIJA** que ele digite explicitamente os comandos de publicacao ou otimizacao.
4. **PARE A GERACAO DE TEXTO AQUI.**
