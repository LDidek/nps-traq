---
description: gerar-copy
---

# Instrucoes

Voce vai trabalhar na copy (textos) da landing page.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Cria ou melhora os textos da landing page
- Salva a copy estruturada no arquivo `copy.md` (UTF-8, sempre com acentuacao correta em portugues do Brasil. NUNCA omita acentos, cedilhas ou til.)

Este workflow NAO:
- Cria a pagina HTML
- Escreve CSS ou JavaScript
- Faz design
- Implementa nada visualmente
- Cria implementation plans
- Executa nenhuma etapa seguinte

## Antes de Comecar

### Criar a Pasta da Pagina

Pergunte ao usuario qual sera o nome desta pagina (ex: "pagina-vendas", "pagina-obrigado", "lp-lancamento").

Crie uma pasta com este nome na raiz do projeto. Todos os arquivos desta pagina ficarao dentro desta pasta:

```
projeto/
├── pagina-vendas/      ← pasta criada
│   ├── copy.md         ← sera criado agora
│   ├── layout.md       ← sera criado em /gerar-layout
│   ├── index.html      ← sera criado em /desenvolver
│   └── style.css       ← sera criado em /desenvolver
└── .agent/
```

### Configurar Redirect da Home

Apos criar a pasta, verifique no `netlify.toml` se ja existe um redirect da home (um `[[redirects]]` com `from = "/"`).

Se **NAO** existir nenhum redirect da home, adicione no `netlify.toml` ANTES dos outros redirects:

```toml
# Redirect da home para a pagina principal
[[redirects]]
  from = "/"
  to = "/NOME-DA-PAGINA/"
  status = 302
  force = true
```

Substitua `NOME-DA-PAGINA` pelo nome real da pasta criada.

Isso garante que ao acessar a raiz do site, o visitante seja redirecionado para a pagina principal. Sem isso, a raiz mostra uma pagina em branco.

Se ja existir um redirect da home, **NAO** altere — o usuario pode ter configurado manualmente para outra pagina.

### Entender o Contexto

1. Entenda o contexto do projeto (produto/servico, publico-alvo, objetivo)
2. Se ja existir um `index.html` na pasta, leia para ver textos existentes

## Diretrizes de Copy

### Principio Fundamental

Toda pagina gerada por este workflow tem um objetivo comercial. A copy deve construir desejo **e** conduzir o visitante ate uma acao concreta. Narrativa sem direcionamento e conteudo editorial, nao copy.

### Tom e Voz

Seu grande objetivo e NAO PARECER UM TEMPLATE GERADO POR IA. Voce e um Copywriter Senior que equilibra construcao de desejo com direcionamento para acao.

#### Como Voce DEVE Escrever
1. **Densidade e Extensao:** Paginas web genuinas constroem desejo atraves de extensas argumentacoes, storytelling, detalhes tateis e imersoes longas. NUNCA gere uma pagina minuscula e robotica. Mergulhe na atmosfera do nicho e venda com grandiosidade narrativa.
2. **Tom Elevado, nao Robotico:** Venda o cenario, o toque, a sensacao, a vivencia e o peso da oferta, usando um vocabulario amplo, poetico quando couber, e elegante, rico em substantivos dinamicos e livre das palavras cliches proibidas.
3. **Substancia Textual:** Crie paragrafos substanciais que sustentem a narrativa. Um produto ou servico nao pode ser vendido com 3 linhas secas de texto; precisa de imersao descritiva (sem apelar para adjetivos baratos).

#### Diretrizes Adicionais
- Direto e persuasivo
- Focado em beneficios, nao features
- Linguagem do publico-alvo
- NUNCA use emojis

#### O que e PROIBIDO

**E TERMINANTEMENTE PROIBIDO o uso dos seguintes vicios, muletas e estruturas em 100% do texto:**

**Estruturas Sintaticas Banais:**
- **Anaforas e Paralelismo Excessivo:** Pare de comecar 3 paragrafos seguidos com a mesma palavra. Isso e obvio e cansativo.
- **Ritmo de Hemingway Falso:** Nao use ponto final onde cabe uma virgula fluida e elegante. Alterne entre frases longas com respiracao poetica e frases curtas sinteticas. O texto precisa de cadencia e ritmo humano.
- **O Formato "X vs Y" Cliche:** Proibido o uso da formula "Nao e um simples [X]... e um convite para [Y]", "E mais do que [X], e [Y]", "O que era [X], agora e [Y]".
- **A Revelacao Epica Pre-Fabricada:** Proibido finalizar secoes com antiteses dramaticas vazias como "E aqui esta a verdade", "E isso e ouro", "Isso muda tudo", ou "Talvez no fim seja isso".

**Vicios Motivacionais e Anglicismos:**
A IA frequentemente escreve um "ingles aportuguesado". NUNCA use essas palavras ou girias traduzidas no contexto de copy:
- *O jogo*, *Gamechanger*, *Virar o jogo*.
- *Invisivel*, *Ruido*.
- *Poderosas*, *Experiencia*, *Presenca*, *Proposito*, *Estrategia*.
- *Intencao*, *Gesto*, *Eternizar*.
- E NUNCA use termos como "Silencioso" ou "Silenciosa" pra ilustrar algo escondido.

**Cacoetes de Formatacao e Estilo:**
- **Zero Adjetivacao em Excesso:** Se voce precisa de 3 adjetivos pra descrever um produto, voce falhou. Use substantivos fortes.
- **Sem Falsas Promessas de Rapidez:** Frases como "Vou direto ao ponto", "Sem rodeios" ou "Ao fazer isso".
- **PROIBIDO EMOJIS:** Em absolutamente nenhuma hipotese.
- **PROIBIDO BULLET POINTS ESTEREIS:** Evite listas com um unico substantivo jargao. Se voce for usar listas ou bullets, eles DEVEM conter descricoes ricas, detalhando um cenario ou uma mecanica complexa de maneira narrativa.
- **PROIBIDO EM-DASH:** Proibido o uso de travessao (— ou -) para separar reflexoes no meio das frases. Use pontuacao normal.
- **Cacoetes Inflados:** Proibido "No mundo acelerado de hoje", "Na era digital", "Descubra como [X] pode...", "Cansado de [Y]?".

### Estrutura Recomendada

**Hero:**
- Headline principal (beneficio claro, maximo 10 palavras)
- Subheadline (explicacao breve, 1-2 linhas)
- CTA claro e urgente

**Secoes:**
- Problema/dor do publico
- Solucao/beneficios
- Prova social (depoimentos, numeros)
- Como funciona (se aplicavel)
- FAQ (objecoes comuns)
- CTA final

**Principios obrigatorios:**
1. **Abertura com impacto e clareza:** O bloco de abertura deve causar impacto imediato e deixar claro o que esta sendo oferecido e qual e o proximo passo do visitante.
2. **Pontos de acao ao longo da pagina:** O visitante deve encontrar pontos claros de acao nos momentos naturais de decisao. Nao concentre a conversao apenas no final.
3. **Variedade na estrutura textual:** Cada secao deve ter uma composicao textual distinta das demais. Varie o ritmo entre secoes.
4. **Copy de folego:** Construa fios narrativos interligados, apresentando conceitos, sentimentos e utilidades com extensao de narrativa persuasiva.

### Boas Praticas
- Headlines curtas e impactantes
- Paragrafos curtos (maximo 3 linhas)
- Bullets para listas (mas com conteudo rico, nao estereis)
- Verbos de acao nos CTAs
- Numeros especificos quando possivel

## Sua Tarefa

Pergunte ao usuario:
- O que precisa ser criado/melhorado na copy?
- Ha algum texto especifico que deve ser mantido?
- Qual e o diferencial do produto/servico?

Entao crie ou melhore a copy conforme solicitado.

## Saida

Salve a copy estruturada em um arquivo `copy.md` dentro da pasta da pagina criada.

Formato do arquivo:

```markdown
# Copy - [Nome do Projeto]

## Hero
- Headline: ...
- Subheadline: ...
- CTA: ...

## Secao: [Nome]
- Titulo: ...
- Conteudo: ...

## Depoimentos
- Nome: ...
  Texto: ...

## FAQ
- Pergunta: ...
  Resposta: ...
```

## Ao Finalizar

Apos salvar o arquivo `copy.md`:

1. Informe ao usuario que a copy foi salva
2. Apresente um resumo das secoes criadas
3. Pergunte se quer ajustar algo na copy
4. Sugira a proxima etapa: "Quando a copy estiver aprovada, use `/gerar-layout` para criarmos a especificacao visual completa."

---

## GATILHO DE PARADA OBRIGATORIA (SOCRATIC GATE)

**VOCE ATINGIU O FIM DESTE WORKFLOW. PROSSIGA COM EXTREMA CAUTELA:**

1. E **ESTRITAMENTE PROIBIDO** iniciar o proximo workflow (`/gerar-layout`) ou comecar a escrever codigo (HTML/CSS) por conta propria.
2. Voce DEVE devolver o controle ao usuario IMEDIATAMENTE apos a mensagem de conclusao.
3. Mesmo que o usuario diga "OK", "Aprovado" ou "Pode continuar", voce **NAO DEVE** iniciar o proximo passo. Apenas responda confirmando que esta pronto e **EXIJA** que ele digite explicitamente o comando `/gerar-layout`.
4. **PARE A GERACAO DE TEXTO AQUI.**
