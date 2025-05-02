// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

import Card from "./components/Card";
import NavBar from "./components/NavBar";

import SobreMim from "./pages/SobreMim";
import Carreira from "./pages/Carreira";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";

export default function App() {
  const [sessaoAtiva, setSessaoAtiva] = useState(() => {
    const sessaoSalvada = localStorage.getItem("sessaoDoSiteAtiva");
    return sessaoSalvada ? sessaoSalvada : "card";
  });

  useEffect(() => {
    localStorage.setItem("sessaoDoSiteAtiva", sessaoAtiva);
  }, [sessaoAtiva]);

  const sessaoRenderizada = () => {
    switch (sessaoAtiva) {
      case "sobreMim":
        return <SobreMim />;
      case "carreira":
        return <Carreira />;
      case "portfolio":
        return <Portfolio />;
      case "blog":
        return <Blog />;
      case "contato":
        return <Contato />;
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
