---
description: publicar
---

# Instruções

O usuário quer fazer deploy para produção. Use a skill `deploy` que contém toda a lógica necessária.

## Processo

1. **Leia a skill `deploy`** (`.agent/skills/deploy/SKILL.md`) e siga as instruções detalhadas
2. A skill cobre: primeiro deploy, atualizações, cenários A/B/C/D, troubleshooting, e verificações pré-deploy
3. **Antes de fazer push**, verifique se o redirect da home está configurado no `netlify.toml` (ver seção abaixo)

## REGRA DE OURO: Autonomia Total

**VOCÊ DEVE fazer tudo sozinho. NUNCA peça para o usuário executar comandos manualmente.**

Quando um comando for interativo (como `netlify init`), VOCÊ deve:
1. Executar o comando
2. Enviar os inputs necessários para responder aos prompts
3. Continuar até concluir

Se algo falhar, tente resolver. Só peça ajuda ao usuário se realmente não conseguir resolver sozinho.

## Verificar Redirect da Home

Antes de fazer o push, verifique no `netlify.toml` se existe um redirect da home (`from = "/"`).

Se **NÃO** existir:
1. Identifique a página principal do projeto (a pasta com `index.html` que NÃO seja o template da raiz)
2. Adicione o redirect no `netlify.toml`:
```toml
# Redirect da home para a página principal
[[redirects]]
  from = "/"
  to = "/nome-da-pagina/"
  status = 302
  force = true
```
3. Inclua esta alteração no commit de deploy

Isso evita que o visitante veja uma página em branco ao acessar a raiz do site.

## Ao Finalizar

Após o deploy:

1. Informe que o site está no ar
2. Identifique a página principal pelo redirect `from = "/"` no `netlify.toml` (campo `to`)
3. Forneça o link DIRETO para a página principal. NUNCA forneça apenas o link raiz — a raiz contém apenas o template base
4. **PARE COMPLETAMENTE E AGUARDE** instrução do usuário. NUNCA continue fazendo alterações ou rode outros workflows automaticamente.
