import { useState } from "react";
import "./Projetos.css";
import Card from "../components/Card";
import ProjetoCard from "../components/ProjetoCard";
import ProjetosData from "../data/ProjetosData";
import ProjetoModal from "../components/ProjetoModal";
import ProjetosNav from "../components/ProjetosNav";
import Footer from "../components/Footer";

const Projetos = () => {
  const [filtroAtual, setFiltroAtual] = useState("todos");
  // 2. Novo estado para controlar o projeto selecionado (abre/fecha o modal)
  const [projetoSelecionado, setProjetoSelecionado] = useState(null); 

  const projetosFiltrados =
    filtroAtual === "todos"
      ? ProjetosData.projetos
      : ProjetosData.projetos.filter(
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
      <main className="projetos-container">
        <section className="projetos-section">
          <div className="linha">
            <h2>Projetos</h2>
            <div className="barra"></div>
          </div>

          <div className="carrosel">
            <ProjetosNav 
              categorias={ProjetosData.categorias}
              filtroAtual={filtroAtual}
              onFiltroChange={setFiltroAtual}
            />
          </div>

          <div className="lista-projetos">
            {projetosFiltrados.map((projeto) => (
              <ProjetoCard 
                key={projeto.id} 
                projeto={projeto} 
                onCardClick={handleOpenModal}
              />
            ))}
          </div>
          <Footer />
        </section>
      </main>
      
      {projetoSelecionado && (
        <ProjetoModal 
          projeto={projetoSelecionado} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
};

export default Projetos;