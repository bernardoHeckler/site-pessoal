// App.jsx
import React, { useState, useEffect, Suspense } from "react";
import "./App.css";

import Card from "./components/Card";
import NavBar from "./components/NavBar";
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
      card: {
        title: 'Bernardo Heckler - Desenvolvedor Full Stack',
        description: 'Portfólio 2026/2027 de Bernardo Heckler, Desenvolvedor Full Stack Junior com foco em interfaces, APIs e dados.'
      },
      sobreMim: {
        title: 'Sobre Mim - Bernardo Heckler',
        description: 'Conheca Bernardo Heckler, Desenvolvedor Full Stack Junior com experiencia em React, Python, SQL, AWS e Engenharia de Dados.'
      },
      carreira: {
        title: 'Carreira - Bernardo Heckler',
        description: 'Experiencia profissional e formacao academica de Bernardo Heckler em desenvolvimento full stack, dados, cloud e tecnologia.'
      },
      portfolio: {
        title: 'Projetos - Bernardo Heckler',
        description: 'Projetos e trabalhos desenvolvidos por Bernardo Heckler: APIs, aplicacoes web, apps mobile, dados e designs em Figma.'
      },
      blog: {
        title: 'Blog - Bernardo Heckler',
        description: 'Atualizacoes sobre desenvolvimento, engenharia de dados, carreira e tecnologia por Bernardo Heckler.'
      },
      contato: {
        title: 'Contato - Bernardo Heckler',
        description: 'Entre em contato com Bernardo Heckler para oportunidades, projetos e conexoes profissionais.'
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
        return (
          <>
            <div id="animated-background"></div>
            <Card setSessaoAtiva={setSessaoAtiva} />
          </>
        );
    }
  };

  return (
    <div className="app">
      {sessaoRenderizada()}
      <NavBar setSessaoAtiva={setSessaoAtiva} sessaoAtiva={sessaoAtiva} />
    </div>
    
  );
}
