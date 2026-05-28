# Portfolio 2026/2027 - Bernardo Heckler

Portfolio pessoal em React + Vite para apresentar perfil profissional, carreira, projetos, blog e contatos de Bernardo Heckler.

## Status do Projeto

Esta base esta sendo preparada para deploy na Vercel, com suporte a variaveis de ambiente e futuras integracoes com a API do GitHub via funcoes server-side. Tokens e chaves privadas nao devem ser expostos no frontend.

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
VITE_SITE_URL=https://site-pessoal.vercel.app
GITHUB_TOKEN=
GITHUB_USERNAME=bernardoHeckler
```

`VITE_SITE_URL` e publico porque e usado pelo Vite no navegador. `GITHUB_TOKEN` deve ficar apenas no servidor ou nas variaveis protegidas da Vercel.

## Deploy na Vercel

Configuracao sugerida:

- Framework: Vite
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: 20+

Ao definir um dominio final diferente de `site-pessoal.vercel.app`, atualize `VITE_SITE_URL`, `sitemap.xml`, `robots.txt` e as metas estaticas do `index.html`.

## Estrutura Principal

```text
src/
├── components/
├── data/
├── hooks/
├── pages/
├── png/
├── svg/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## Contato

- Portfolio: https://site-pessoal.vercel.app
- GitHub: https://github.com/bernardoHeckler
- LinkedIn: https://www.linkedin.com/in/bernardo-heckler-645153305/
- X/Twitter: https://x.com/bhcklr
