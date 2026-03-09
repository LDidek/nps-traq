---
description: visualizar-local
---

# Instruções

O usuário quer visualizar a página no navegador localmente. Use a skill `local-server` que contém toda a lógica necessária.

## Processo

1. **Leia a skill `local-server`** (`.agent/skills/local-server/SKILL.md`) e siga as instruções detalhadas
2. A skill cobre: verificação de servidor existente, portas disponíveis, e troubleshooting

## A REGRA DO ROOT (Diretório de Execução)
**O servidor Netlify Dev DEVE OBRIGATORIAMENTE ser iniciado na RAIZ do projeto**, onde o arquivo `netlify.toml` está localizado.
Se você estiver trabalhando dentro da pasta de uma página específica (ex: `/minha-pagina`), **VOLTE PARA A RAIZ** (`cd ..` ou similar dependendo da profundidade) antes de rodar qualquer comando do Netlify ou checar portas.

## REGRA ABSOLUTA: Apenas Netlify Dev

**NUNCA** use alternativas como `python -m http.server`, `npx serve`, etc.

O Netlify Dev é **OBRIGATÓRIO** porque:
1. CDN de imagens (`/.netlify/images`) só funciona com ele
2. Redirects do netlify.toml são simulados
3. Formulários Netlify funcionam
4. Mostra o site EXATAMENTE como vai ao ar

## Ao Finalizar

Informe a URL ao usuário e:
1. Aguarde o usuário visualizar
2. **PARE COMPLETAMENTE E AGUARDE**

**NUNCA** continue para outras etapas automaticamente.
