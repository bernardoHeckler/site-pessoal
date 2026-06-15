# Portfólio 2026/2027 - Bernardo Heckler

Portfólio pessoal em React + Vite para apresentar perfil profissional, carreira, projetos, blog e contatos de Bernardo Heckler.

## Status do Projeto

Esta base esta sendo preparada para deploy na Vercel, com suporte a variaveis de ambiente e integracao com a API do GitHub via funcao server-side. Tokens e chaves privadas nao devem ser expostos no frontend.

## Tecnologias

- React 19
- Vite 6
- JavaScript
- CSS
- React Icons
- Vite PWA
- Vercel

## Como Rodar Localmente

Requisitos:

- Node.js 20+
- npm 10+

Instalacao:

```bash
npm ci
npm run dev
```

Build de producao:

```bash
npm run build
npm run preview
```

Verificacoes:

```bash
npm run lint
npm run audit
```

## Variaveis de Ambiente

Use `.env.example` como referencia e mantenha o arquivo `.env` fora do Git.

```bash
VITE_SITE_URL=https://bernardo-heckler.vercel.app
GITHUB_TOKEN=
GITHUB_USERNAME=bernardoHeckler
```

`VITE_SITE_URL` e publico porque e usado pelo Vite no navegador. `GITHUB_TOKEN` deve ficar apenas no servidor ou nas variaveis protegidas da Vercel.

## API do GitHub

O endpoint `api/github.js` consulta a API publica do GitHub pelo backend da Vercel. O token e opcional e serve para aumentar limite de requisicoes; ele nao e enviado ao navegador.

Dados retornados:

- perfil publico
- repositorios publicos
- linguagens mais recorrentes
- lista inicial de repositorios em destaque para o portfolio

Durante desenvolvimento local, `npm run dev` usa fallback direto para a API publica do GitHub se `/api/github` nao estiver disponivel. Para testar a funcao serverless localmente, use `vercel dev`.

Resiliencia em producao:

- timeout controlado para evitar telas presas em carregamento
- cache local temporario no navegador
- fallback para dados publicos do GitHub quando a funcao serverless nao responder
- indicacao visual quando o portfolio estiver usando cache local

## Deploy na Vercel

Configuracao sugerida:

- Framework: Vite
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: 20+

Ao definir um dominio final diferente de `bernardo-heckler.vercel.app`, atualize `VITE_SITE_URL`, `sitemap.xml`, `robots.txt` e as metas estaticas do `index.html`.

## Estrutura Principal

```text
src/
+-- components/
+-- data/
+-- hooks/
+-- pages/
+-- png/
+-- svg/
+-- utils/
+-- App.jsx
+-- main.jsx
`-- index.css
```

## Contato

- Portfólio: https://bernardo-heckler.vercel.app
- GitHub: https://github.com/bernardoHeckler
- LinkedIn: https://www.linkedin.com/in/bernardo-heckler-645153305/
- X/Twitter: https://x.com/bhcklr
