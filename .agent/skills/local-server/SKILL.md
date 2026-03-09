---
name: local-server
description: Use when you need to start a local development server, view the site locally, provide a localhost URL, or when the user wants to preview their work. Handles port conflicts automatically.
---

# Skill: Local Server

Servidor de desenvolvimento local usando Netlify Dev.

---

## REGRA ABSOLUTA: Apenas Netlify Dev

**NUNCA** use alternativas como `python -m http.server`, `npx serve`, etc.

O Netlify Dev é obrigatório porque:
- CDN de imagens (`/.netlify/images`) só funciona com ele
- Simula redirects do netlify.toml
- Testa formulários Netlify
- Mostra o site EXATAMENTE como vai ao ar

---

## Processo (SEMPRE seguir)

### 0. NUNCA RODE DENTRO DE SUBPASTAS (Regra do Root)
O servidor Netlify Dev **DEVE OBRIGATORIAMENTE** ser iniciado na RAIZ do projeto, onde o arquivo `netlify.toml` está localizado. 
Se você acabou de criar uma pasta para uma página (ex: `/minha-pagina`) e está trabalhando nela, **NÃO** inicie o servidor de dentro dela. Volte para a raiz do projeto (onde fica o `.agent` e o `netlify.toml`) e rode o comando lá. As rotas no `.toml` cuidarão do redirecionamento.

### 1. Verificar se já existe servidor NA RAIZ

```bash
lsof -i :8888 -i :8889 -i :8890 -i :3999 -i :4000 -i :4001 2>/dev/null | grep node
```

Se houver processos, verifique o diretório de trabalho deles:

```bash
# Substitua PID pelo número do processo encontrado
lsof -p PID 2>/dev/null | grep cwd
```

**Se o diretório for a pasta atual:**
- O servidor já está rodando
- Apenas informe o link ao usuário (a porta está na saída do primeiro comando)
- **NÃO inicie outro servidor**

### 2. Se NÃO houver servidor desta pasta

Verifique quais portas estão ocupadas e escolha o primeiro par livre:

- 8888 / 3999
- 8889 / 4000
- 8890 / 4001
- 8891 / 4002
- 8892 / 4003

### 3. Iniciar o servidor

```bash
netlify dev --port {PRINCIPAL} --functions-port {FUNCOES}
```

---

## Resumo do Fluxo

```
1. Verificar processos node nas portas 8888-8892 e 3999-4003
   │
   ├── Encontrou processo?
   │   │
   │   ├── É desta pasta? → Informar link existente, NÃO criar novo
   │   │
   │   └── É de outra pasta? → Escolher próximo par de portas livre
   │
   └── Nenhum processo? → Usar portas padrão 8888/3999

2. Iniciar servidor (se necessário)

3. Informar URL ao usuário
```

---

## FALLBACK PROIBIDO

Se o Netlify Dev falhar por qualquer motivo (permissão, porta, erro), **NUNCA** use alternativas:
- **NUNCA** `python -m http.server`
- **NUNCA** `python3 -m http.server`
- **NUNCA** `npx serve`
- **NUNCA** `npx http-server`
- **NUNCA** qualquer outro servidor

Em vez disso, **corrija o problema** e tente `netlify dev` novamente. Se não conseguir resolver, informe o erro ao usuário — mas NUNCA suba um servidor alternativo.

---

## Troubleshooting

### Erro de permissão (EACCES / Permission denied)

Problema comum em macOS quando o Netlify CLI foi instalado com `sudo`. Arquivos em `~/.npm` e/ou `~/Library/Preferences/netlify/` ficam com owner root, impedindo o `netlify dev` de funcionar.

**VOCÊ DEVE corrigir isso automaticamente. NUNCA peça ao usuário para rodar comandos no terminal.**

```bash
sudo chown -R $(whoami):$(id -gn) ~/.npm 2>/dev/null
sudo chown -R $(whoami):$(id -gn) ~/Library/Preferences/netlify 2>/dev/null
```

Após corrigir as permissões, tente `netlify dev` novamente.

Se o `sudo` pedir senha, informe ao usuário:
> "Preciso corrigir um problema de permissão. O sistema vai pedir sua senha de administrador do Mac — é a mesma que você usa para desbloquear o computador."

### netlify: command not found

**IMPORTANTE:** NUNCA use `sudo npm install`. Isso causa o problema de permissão acima.

Se precisar instalar:

```bash
# Primeiro corrigir permissões do npm (evita precisar de sudo)
sudo chown -R $(whoami):$(id -gn) ~/.npm 2>/dev/null

# Depois instalar SEM sudo
npm install -g netlify-cli
```

Se mesmo após corrigir permissões o `npm install -g` falhar com EACCES, configure o diretório global do npm:

```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
npm install -g netlify-cli
```

### Servidor não atualiza

Cache do navegador. Hard refresh:
- Mac: `Cmd+Shift+R`
- Windows: `Ctrl+Shift+R`

---

## Ao Finalizar

Informe a URL ao usuário:

> "Servidor iniciado. Acesse: http://localhost:{PORTA}"

Ou se já existia:

> "Servidor já está rodando. Acesse: http://localhost:{PORTA}"

Após fornecer o link:
1. Aguarde o usuário visualizar
2. **PARE COMPLETAMENTE E AGUARDE**

**NUNCA** continue para outras etapas automaticamente.
