---
trigger: always_on
---

# Comunicacao em Portugues Brasileiro

Todas as mensagens, explicacoes e respostas devem ser em Portugues do Brasil. Termos tecnicos e codigo permanecem em ingles.

# AUTONOMIA TOTAL NO TERMINAL

**Este framework e para leigos. O usuario NAO sabe usar terminal.**

VOCE DEVE executar TODOS os comandos sozinho. NUNCA peca para o usuario:
- "Rode este comando no terminal"
- "Execute X manualmente"
- "Abra o terminal e faca Y"

**Comandos interativos (netlify init, gh auth, etc.):**
1. Execute o comando
2. Envie os inputs necessarios para cada prompt (1, Enter, nome, etc.)
3. Continue ate concluir

**A unica excecao:** Quando o navegador abrir para OAuth (autorizacao GitHub/Netlify), informe ao usuario que ele precisa clicar em "Autorizar" no navegador que abriu automaticamente.

**Se algo falhar:** Tente resolver sozinho. So peca ajuda ao usuario em ultimo caso, e mesmo assim, nunca peca para ele executar comandos.

# Servidor Local

Use a skill `local-server` para gerenciar o servidor de desenvolvimento. A skill cuida de:
- Verificar se ja existe um servidor rodando
- Encontrar uma porta disponivel se necessario
- Fornecer a URL correta

NUNCA rode multiplas instancias do servidor para a mesma pasta.

**NUNCA use servidores alternativos** (`python -m http.server`, `npx serve`, etc.). Se o Netlify Dev falhar (permissao, porta, erro), corrija o problema seguindo o Troubleshooting da skill `local-server`. NUNCA suba outro servidor como fallback — o CDN de imagens e redirects so funcionam com Netlify Dev.

# Imagens via Netlify CDN

Formato: `/.netlify/images?url=/images/foto.jpg&w=800&q=80`. NUNCA use caminhos diretos para imagens. A pasta `/images/` DEVE estar na **raiz do projeto** (junto ao `netlify.toml`), NUNCA dentro da pasta da pagina. Ao baixar imagens, sempre navegue para a raiz do projeto antes de criar a pasta e salvar os arquivos.

# Hero sem animacao de ENTRADA

NUNCA adicione animacoes de entrada (AOS, fade, opacity:0) no hero. O hero deve aparecer instantaneamente. Animacoes pos-carregamento sao permitidas e encorajadas.

# Formulario

Use o formulario existente no index.html como base. Ele ja tem intl-tel-input e Netlify Forms configurados.

# AOS em elementos de scroll

Use `data-aos="fade-up"` em elementos que aparecem no scroll. NUNCA no hero.
Ao inicializar AOS, SEMPRE use `disableMutationObserver: true` para evitar CLS.

# Caminhos absolutos

Comece caminhos de arquivos com `/`. NUNCA use caminhos relativos como `./` ou `../`.

# NUNCA instalar pacotes

Este template nao tem build step. NUNCA rode npm, node, ou comandos de build.

# NUNCA usar emojis

Nao use emojis em nenhum lugar. A nao ser se for solicitado explicitamente pelo usuario

# Socratic Gate (Perguntar Antes de Implementar)

Para tarefas complexas ou ambiguas, PERGUNTE antes de implementar:

- Requisito vago -> Pergunte: "O que exatamente voce quer?"
- Multiplas abordagens possiveis -> Pergunte: "Prefere A ou B?"
- Impacto em outras partes -> Pergunte: "Isso vai afetar X, posso prosseguir?"
- Decisao de design -> Pergunte: "Qual estilo prefere?"

**Regra:** Se houver 1% de duvida, PERGUNTE. Nao assuma.

**Excecao:** Correcoes obvias de bugs ou erros de sintaxe podem ser feitas diretamente.

# NUNCA proceder automaticamente

Cada workflow tem um escopo definido. Ao finalizar um workflow:
- PARE COMPLETAMENTE
- Aguarde instrucao explicita do usuario
- NUNCA inicie o proximo workflow automaticamente
- NUNCA comece a implementar codigo sem instrucao explicita
- Mesmo se o usuario disser "ok" ou "aprovado", apenas confirme e aguarde comando para proxima acao

# Estrutura de Pastas e Versoes

Cada pagina do site fica em sua propria pasta. A versao ATIVA sempre fica na raiz da pasta da pagina.

```
projeto/
├── pagina-vendas/
│   ├── index.html          ← versao ATIVA
│   ├── style.css
│   ├── copy.md
│   ├── layout.md
│   ├── _backup_v1/         ← versao anterior
│   └── _backup_v2/         ← outra versao anterior
├── pagina-obrigado/
│   ├── index.html
│   └── style.css
└── .agent/
```

**Regras:**
1. `/gerar-copy` cria a pasta da pagina com o nome fornecido
2. Versao ativa = SEMPRE na raiz da pasta da pagina
3. Ao pedir nova versao → mover arquivos atuais para `_backup_vN/` e criar nova versao na raiz
4. Pastas com prefixo `_backup_` sao versoes antigas (ignorar em operacoes normais)
5. Numeracao sequencial: `_backup_v1/`, `_backup_v2/`, etc.
