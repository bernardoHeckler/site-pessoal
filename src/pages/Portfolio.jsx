import { useState } from "react";
import "./Portfolio.css";
import Card from "../components/Card";
import ProjetoCard from "../components/ProjetoCard";
import PortfolioData from "../data/PortfolioData";
// 1. Importe o componente ProjetoModal
import ProjetoModal from "../components/ProjetoModal"; 

const Portfolio = () => {
  const [filtroAtual, setFiltroAtual] = useState("todos");
  // 2. Novo estado para controlar o projeto selecionado (abre/fecha o modal)
  const [projetoSelecionado, setProjetoSelecionado] = useState(null); 

  const projetosFiltrados =
    filtroAtual === "todos"
      ? PortfolioData.projetos
      : PortfolioData.projetos.filter(
          (projeto) => projeto.categoria === filtroAtual
        );
        
  // 3. Função para abrir o modal (recebe o objeto projeto)
  const handleOpenModal = (projeto) => {
    setProjetoSelecionado(projeto);
  };
  
  // 4. Função para fechar o modal
  const handleCloseModal = () => {
    setProjetoSelecionado(null);
  };

  return (
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
              // 5. Passa a nova função de abertura (handleOpenModal) para o ProjetoCard
              <ProjetoCard 
                key={projeto.id} 
                projeto={projeto} 
                onCardClick={handleOpenModal} // <--- Nova prop de clique
              />
            ))}
          </div>
        </section>
      </main>
      
      {/* 6. Renderização Condicional do Modal na raiz do componente */}
      {projetoSelecionado && (
        <ProjetoModal 
          projeto={projetoSelecionado} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
};

export default Portfolio;