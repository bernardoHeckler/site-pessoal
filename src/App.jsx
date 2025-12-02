// App.jsx
import React, { useState, useEffect, Suspense } from "react";
import "./App.css";

import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import useMetaTags from "./hooks/useMetaTags";

// Code splitting com React.lazy
const SobreMim = React.lazy(() => import("./pages/SobreMim"));
const Carreira = React.lazy(() => import("./pages/Carreira"));
const Projetos = React.lazy(() => import("./pages/Projetos"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Contato = React.lazy(() => import("./pages/Contato"));

const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

export default function App() {
  const [sessaoAtiva, setSessaoAtiva] = useState(() => {
    const sessaoSalvada = localStorage.getItem("sessaoDoSiteAtiva");
    return sessaoSalvada ? sessaoSalvada : "card";
  });

  // Meta tags dinâmicas baseadas na seção ativa
  const getMetaData = () => {
    const metaMap = {
      sobreMim: {
        title: 'Sobre Mim - Bernardo Heckler',
        description: 'Conheça Bernardo Heckler, Engenheiro de Dados especializado em Python, AWS e análise de dados. Atualmente na Compass UOL.'
      },
      carreira: {
        title: 'Carreira - Bernardo Heckler',
        description: 'Experiência profissional e formação acadêmica de Bernardo Heckler. Engenheiro de Dados com expertise em Python, React e AWS.'
      },
      portfolio: {
        title: 'Projetos - Bernardo Heckler',
        description: 'Projetos e trabalhos desenvolvidos por Bernardo Heckler. APIs, aplicações web, mobile e designs em Figma.'
      },
      blog: {
        title: 'Blog - Bernardo Heckler',
        description: 'Artigos e posts sobre desenvolvimento, engenharia de dados e tecnologia por Bernardo Heckler.'
      },
      contato: {
        title: 'Contato - Bernardo Heckler',
        description: 'Entre em contato com Bernardo Heckler. Engenheiro de Dados disponível para oportunidades e projetos.'
      }
    };
    return metaMap[sessaoAtiva] || {};
  };

  useMetaTags(getMetaData());

  useEffect(() => {
    localStorage.setItem("sessaoDoSiteAtiva", sessaoAtiva);
  }, [sessaoAtiva]);

  const sessaoRenderizada = () => {
    switch (sessaoAtiva) {
      case "sobreMim":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <SobreMim />
          </Suspense>
        );
      case "carreira":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Carreira />
          </Suspense>
        );
      case "portfolio":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Projetos />
          </Suspense>
        );
      case "blog":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Blog />
          </Suspense>
        );
      case "contato":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Contato />
          </Suspense>
        );
      case "card":
      default:
        return <Card />;
    }
  };

  return (
    <div className="app">
      {sessaoRenderizada()}
      <NavBar setSessaoAtiva={setSessaoAtiva} />
    </div>
    
  );
}
