import { useState } from "react";
import "./Portfolio.css";
import Card from "../components/Card";
import PortfolioData from "../data/PortfolioData";

const Portfolio = () => {
  // 1. Controlar o filtro atual com useState
  const [filtroAtual, setFiltroAtual] = useState("todos");

  // 2. Lógica de filtro
  const projetosFiltrados =
    filtroAtual === "todos"
      ? PortfolioData.projetos
      : PortfolioData.projetos.filter(
          (projeto) => projeto.categoria === filtroAtual
        );

  return (
    // 3. layout visual
    <>
      <div id="animated-background"></div>
      <Card />
      <main className="portfolio-container">
        <section className="portfolio-section">
          <div className="linha">
            <h2>Portfólio</h2>
            <div className="barra"></div>
          </div>

          <div className="linha">
            {/* 4. Botões de filtro */}
            <nav className="portfolio-nav">
              {PortfolioData.categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => setFiltroAtual(categoria.id)}
                  className={filtroAtual === categoria.id ? "ativo" : ""}
                >
                  {categoria.nome}
                </button>
              ))}
            </nav>
          </div>

          <div className="lista-projetos">
            {/* 5. Renderizar os projetos filtrados */}
            {projetosFiltrados.map((projeto) => (
              <figure key={projeto.id} className="card-projeto">
                <a
                  href={projeto.url}
                  target={projeto.target}
                  rel="noopener noreferrer"
                  className="link-projeto"
                >
                  <img src={projeto.imagem} alt={projeto.titulo} />
                  <div className="text">
                    <h3 className="nome-projeto">{projeto.titulo}</h3>
                    <p className="tipo-projeto">
                      {/* 6. Renderizar o tipo de projeto */}
                      {projeto.categoria === "aplicacao"
                        ? "Aplicação"
                        : projeto.categoria === "design"
                        ? "Design Web"
                        : projeto.categoria === "java"
                        ? "Desenvolvimento Java"
                        : "Desenvolvimento Web"}
                    </p>
                  </div>
                </a>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
