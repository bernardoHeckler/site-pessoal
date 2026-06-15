import { useEffect } from 'react';

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://bernardo-heckler.vercel.app').replace(/\/$/, '');
const defaultImage = `${siteUrl}/favicon.svg`;
const defaultDescription = 'Portfólio 2026/2027 de Bernardo Heckler, Desenvolvedor Full Stack Júnior com projetos em React, Python, SQL, AWS, APIs e Engenharia de Dados.';
const keywords = 'Bernardo Heckler, Desenvolvedor Full Stack Júnior, Engenharia de Dados, React, Python, SQL, AWS, APIs, Portfólio, Vercel';

const useMetaTags = ({ 
  title = 'Bernardo Heckler - Desenvolvedor Full Stack',
  description = defaultDescription,
  image = defaultImage,
  url = siteUrl
}) => {
  useEffect(() => {
    document.title = title;
    
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Bernardo Heckler');
    updateMetaTag('robots', 'index, follow');
    
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:url', url);
    updateMetaProperty('og:type', 'website');
    updateMetaProperty('og:site_name', 'Portfólio Bernardo Heckler');
    updateMetaProperty('og:locale', 'pt_BR');
    
    updateMetaName('twitter:card', 'summary_large_image');
    updateMetaName('twitter:title', title);
    updateMetaName('twitter:description', description);
    updateMetaName('twitter:image', image);
    updateMetaName('twitter:site', '@bhcklr');
    updateMetaName('twitter:creator', '@bhcklr');
    
    updateMetaName('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaName('theme-color', '#fcce68');
    updateCanonical(url);
    
  }, [title, description, image, url]);
};

const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateMetaProperty = (property, content) => {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateMetaName = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateCanonical = (href) => {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = href;
};

export default useMetaTags;
