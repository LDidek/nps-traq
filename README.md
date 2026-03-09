# Metodo Zero v24

Framework para criar landing pages cinematograficas com HTML, CSS e JavaScript puros. Sem npm, node ou webpack. Infraestrutura 100% Netlify.

---

## Comandos

### Fluxo Principal

```
/gerar-copy → /gerar-layout → /desenvolver → /publicar
```

| Comando | O que faz |
|---------|-----------|
| `/gerar-copy` | Cria pasta da pagina e textos persuasivos |
| `/gerar-layout` | Cria especificacao visual completa (design system + componentes + animacoes) |
| `/desenvolver` | Constroi a pagina completa |
| `/publicar` | Deploy para producao via Netlify |

### Auxiliares

| Comando | O que faz |
|---------|-----------|
| `/visualizar-local` | Servidor local na porta 8888 |
| `/otimizar` | Auditoria e correcoes de performance |
| `/previsualizar` | Deploy Preview via Pull Request |
| `/debug` | Investiga e resolve erros |

---

## Inicio Rapido

```bash
cp -r framework-v24 meu-projeto
cd meu-projeto
```

Abra no Claude Code e use `/gerar-copy nome-da-pagina` para comecar.

---

## Estrutura do Projeto

```
meu-projeto/
├── pagina-vendas/        # Cada pagina tem sua pasta
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── copy.md           # Textos gerados
│   └── layout.md         # Especificacao visual completa
├── pagina-obrigado/      # Outras paginas
├── netlify.toml
└── .agent/               # Configuracoes do framework
```

---

## Como Funciona

1. `/gerar-copy` cria os textos persuasivos da pagina
2. `/gerar-layout` transforma a copy em uma especificacao cinematografica completa: design system (paleta, tipografia, texturas), arquitetura de componentes com animacoes e comportamentos exatos
3. `/desenvolver` executa a especificacao fielmente, construindo toda a pagina

---

## Versoes Alternativas

Ao pedir uma nova versao da pagina, a versao atual vai para `_backup_v1/` e a nova e criada na raiz. Versoes anteriores ficam preservadas.

---

## Requisitos

- Claude Code (CLI)
- Netlify CLI (`npm install -g netlify-cli`)
- Conta Netlify (gratis)
