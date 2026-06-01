import { useMemo, useState } from "react";
import "./Projetos.css";
import Card from "../components/Card";
import ProjetoCard from "../components/ProjetoCard";
import ProjetosData from "../data/ProjetosData";
import ProjetoModal from "../components/ProjetoModal";
import ProjetosNav from "../components/ProjetosNav";
import Footer from "../components/Footer";
import { useGitHubPortfolio } from "../hooks/useGitHubPortfolio";
import { buildGithubProjects, getGithubProjectStats } from "../utils/githubProjects";

const Projetos = () => {
  const [filtroAtual, setFiltroAtual] = useState("todos");
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const { data: githubData, loading: carregandoGithub } = useGitHubPortfolio(24);
  const projetos = useMemo(
    () => buildGithubProjects(ProjetosData.projetos, githubData),
    [githubData]
  );
  const githubStats = useMemo(() => getGithubProjectStats(projetos), [projetos]);

  const projetosFiltrados =
    filtroAtual === "todos"
      ? projetos
      : projetos.filter(
          (projeto) => projeto.categoria === filtroAtual
        );

  const handleOpenModal = (projeto) => {
    setProjetoSelecionado(projeto);
  };

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
            <div className="projetos-github-status">
              <span>{githubStats.synced} projetos sincronizados com GitHub</span>
              <span>{githubStats.generated} novos destaques</span>
              {carregandoGithub && <span>Atualizando dados...</span>}
            </div>
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
                key={projeto.uid || projeto.id}
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
