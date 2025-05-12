import { useState } from "react";
import "./Portfolio.css";
import Card from "../components/Card";
import PortfolioData from "../data/PortfolioData";

const Portfolio = () => {
  const [filtroAtual, setFiltroAtual] = useState("todos");

  const projetosFiltrados =
    filtroAtual === "todos"
      ? PortfolioData.projetos
      : PortfolioData.projetos.filter(
          (projeto) => projeto.categoria === filtroAtual
        );

  return (
    <>
      <Card />
      <main className="portfolio-container">
        <section className="portfolio-section">
          <div className="linha">
            <h2>Portfólio</h2>
            <div className="barra"></div>
          </div>

          <div className="linha">
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
                      {projeto.categoria === "aplicacao"
                        ? "Aplicação"
                        : projeto.categoria === "Design Web"
                        ? "Design Web"
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
