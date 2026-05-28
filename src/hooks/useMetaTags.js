import { useEffect } from 'react';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://site-pessoal.vercel.app';
const defaultImage = `${siteUrl}/favicon.svg`;

const useMetaTags = ({ 
  title = 'Bernardo Heckler - Desenvolvedor Full Stack',
  description = 'Portfolio de Bernardo Heckler, Desenvolvedor Full Stack Junior com experiencia em React, Python, SQL, AWS e Engenharia de Dados.',
  image = defaultImage,
  url = siteUrl
}) => {
  useEffect(() => {
    document.title = title;
    
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'Bernardo Heckler, Desenvolvedor Full Stack, Engenharia de Dados, Python, React, JavaScript, AWS, SQL, Portfolio');
    updateMetaTag('author', 'Bernardo Heckler');
    
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:url', url);
    updateMetaProperty('og:type', 'website');
    updateMetaProperty('og:site_name', 'Bernardo Heckler Projetos');
    
    updateMetaName('twitter:card', 'summary_large_image');
    updateMetaName('twitter:title', title);
    updateMetaName('twitter:description', description);
    updateMetaName('twitter:image', image);
    updateMetaName('twitter:creator', '@bhcklr');
    
    updateMetaName('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaName('theme-color', '#fcce68');
    
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

export default useMetaTags;
