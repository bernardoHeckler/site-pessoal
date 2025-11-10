# 🚀 Portfólio 2025 - Bernardo Antunes Heckler

[![Deploy Status](https://img.shields.io/badge/Deploy-Live-brightgreen)](https://bernardoheckler.github.io/site-pessoal/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.1-purple)](https://vitejs.dev/)
[![PWA](https://img.shields.io/badge/PWA-Ready-orange)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 📋 Sumário

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar](#-como-executar)
- [📦 Build e Deploy](#-build-e-deploy)
- [🎨 Componentes](#-componentes)
- [📞 Contato](#-contato)
- [📄 Licença](#-licença)

## 🎯 Sobre o Projeto

Portfólio pessoal moderno e responsivo desenvolvido em React, showcasing minha jornada como **Engenheiro de Dados** na Compass UOL. O projeto demonstra expertise em desenvolvimento front-end, integração com APIs, otimizações de performance e boas práticas de desenvolvimento.

### 🌟 Destaques

- **PWA (Progressive Web App)** com service worker
- **Integração GitHub API** para métricas em tempo real
- **Lazy Loading** otimizado para performance
- **SEO completo** com meta tags dinâmicas
- **Design responsivo** mobile-first
- **Blog técnico** com categorização
- **Sistema de certificações** interativo

## ✨ Funcionalidades

### 🏠 Página Principal
- Cartão de apresentação interativo
- Informações de contato dinâmicas
- Links para redes sociais
- Navegação fluida entre seções

### 👨‍💻 Sobre Mim
- Descrição profissional detalhada
- Download de currículo em PDF
- Atividades atuais e futuras ideias
- Stack de tecnologias com ícones
- **GitHub Stats** em tempo real
- **Blog técnico** com categorias
- **Certificações** com status
- **Contribuições open source**

### 💼 Carreira
- Timeline de experiências profissionais
- Formação acadêmica
- Habilidades técnicas com percentuais
- Histórico educacional

### 🎨 Portfólio
- Galeria de projetos com filtros
- Modal detalhado para cada projeto
- Categorização por tecnologia
- Links para repositórios e demos

### 📝 Blog
- Posts sobre desenvolvimento
- Sistema de categorias
- Links para artigos externos

### 📧 Contato
- Formulário funcional
- Informações de contato
- Integração com redes sociais

## 🛠️ Tecnologias

### Frontend
- **React 19.0.0** - Biblioteca principal
- **Vite 6.3.1** - Build tool e dev server
- **React Router DOM 7.5.3** - Roteamento SPA
- **CSS3** - Estilização com variáveis customizadas
- **JavaScript ES6+** - Lógica da aplicação

### Performance & SEO
- **Vite PWA Plugin** - Progressive Web App
- **Lazy Loading** - Carregamento otimizado de imagens
- **Code Splitting** - Divisão de bundles
- **Meta Tags Dinâmicas** - SEO otimizado
- **Service Worker** - Cache offline

### Integrações
- **GitHub API** - Estatísticas em tempo real
- **Intersection Observer** - Lazy loading nativo
- **LocalStorage** - Cache de dados

### Deploy
- **GitHub Pages** - Hospedagem gratuita
- **GitHub Actions** - CI/CD automatizado

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Card.jsx            # Cartão de apresentação
│   ├── NavBar.jsx          # Navegação principal
│   ├── LazyImage.jsx       # Componente de lazy loading
│   ├── GitHubStats.jsx     # Estatísticas do GitHub
│   ├── TechBlog.jsx        # Blog técnico
│   ├── CertificationBadges.jsx # Certificações
│   ├── OpenSourceContributions.jsx # Contribuições
│   ├── ProjetoCard.jsx     # Card de projeto
│   ├── ProjetoModal.jsx    # Modal de projeto
│   └── Form.jsx            # Formulário de contato
├── pages/               # Páginas principais
│   ├── SobreMim.jsx        # Página sobre
│   ├── Carreira.jsx        # Página carreira
│   ├── Portfolio.jsx       # Página portfólio
│   ├── Blog.jsx            # Página blog
│   └── Contato.jsx         # Página contato
├── data/                # Dados estáticos
│   ├── CardData.jsx        # Dados do cartão
│   ├── CarreiraData.jsx    # Dados da carreira
│   ├── PortfolioData.jsx   # Dados dos projetos
│   ├── SobreMimData.jsx    # Dados sobre mim
│   └── BlogData.jsx        # Dados do blog
├── hooks/               # Hooks customizados
│   ├── useMetaTags.js      # SEO dinâmico
│   └── useGitHubStats.js   # Integração GitHub
├── utils/               # Utilitários
│   └── performance.js      # Funções de performance
├── svg/                 # Ícones e ilustrações
├── png/                 # Imagens
├── App.jsx              # Componente principal
├── main.jsx             # Entry point
├── Cores.css            # Variáveis de cores
└── index.css            # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Git**

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/bernardoHeckler/site-pessoal.git
cd site-pessoal
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute em modo desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
npm run deploy   # Deploy para GitHub Pages
npm run analyze  # Análise do bundle
```

## 📦 Build e Deploy

### Build Local
```bash
npm run build
```
Gera os arquivos otimizados na pasta `dist/`

### Deploy Automático
```bash
npm run deploy
```
Faz build e deploy automático para GitHub Pages

### Funcionalidades do Build
- **Code Splitting** automático
- **Minificação** de CSS e JS
- **Otimização de imagens**
- **PWA** com service worker
- **Sitemap.xml** e **robots.txt**

## 🎨 Componentes

### Componentes Principais
- **Card**: Cartão de apresentação responsivo
- **NavBar**: Navegação com estado ativo
- **LazyImage**: Carregamento otimizado de imagens
- **GitHubStats**: Métricas do GitHub em tempo real
- **TechBlog**: Blog com categorias e filtros
- **CertificationBadges**: Sistema de certificações
- **OpenSourceContributions**: Projetos e contribuições

### Hooks Customizados
- **useMetaTags**: SEO dinâmico por página
- **useGitHubStats**: Integração com GitHub API

### Utilitários
- **performance.js**: Funções de otimização
- **Cores.css**: Sistema de design tokens

## 📞 Contato

### Bernardo Antunes Heckler
**Engenheiro de Dados | Desenvolvedor Full-Stack**

- 📧 **Email**: [bernaheckler1@gmail.com](mailto:bernaheckler1@gmail.com)
- 💼 **LinkedIn**: [bernardo-heckler](www.linkedin.com/in/bernardo-heckler)
- 🐱 **GitHub**: [bernardoHeckler](https://github.com/bernardoHeckler)
- 🐦 **Twitter**: [@bhcklr](https://x.com/bhcklr)
- 🎨 **Figma**: [Design Portfolio](https://www.figma.com/design/P0Y51G1NX5v0McdR0160v0/apple-design-portfolio?node-id=23-1095&t=AIgJXllb1zk874mZ-1)
- 📱 **Telefone**: (54) 9 9641-8356
- 📍 **Localização**: Rio Grande do Sul, Brasil

### 🌐 Links Úteis
- 🚀 **Portfolio Live**: [bernardoheckler.github.io/site-pessoal](https://bernardoheckler.github.io/site-pessoal/)
- 🎯 **Compass UOL**: Engenheiro de Dados (Atual)

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ por [Bernardo Heckler](https://github.com/bernardoHeckler)**

*Transformando dados em insights valiosos* 🚀

</div>