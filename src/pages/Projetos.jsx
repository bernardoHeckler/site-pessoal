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
import { getGitHubSourceLabel } from "../utils/githubStatus";

const Projetos = () => {
  const [filtroAtual, setFiltroAtual] = useState("todos");
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const {
    data: githubData,
    loading: carregandoGithub,
    error: githubError,
    isStale: githubStale,
    refreshing: atualizandoGithub,
    source: githubSource,
  } = useGitHubPortfolio(24);
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

  const githubStatus = (() => {
    if (atualizandoGithub) return "Atualizando dados do GitHub";
    if (githubStale) return "Dados do GitHub em cache local";
    if (githubData?.source || githubSource) {
      return `Fonte: ${getGitHubSourceLabel(githubSource || githubData.source)}`;
    }
    if (githubError) return "Projetos locais ativos";
    if (carregandoGithub) return "Conectando ao GitHub";
    return null;
  })();

  return (
    <>
      <div id="animated-background"></div>
      <Card />
      <main className="projetos-container">
        <section className="projetos-section">
          <div className="linha">
            <h2>Projetos</h2>
            <div className="barra"></div>
            <p className="projetos-intro">
              Seleção de aplicações, APIs, projetos mobile e estudos orientados a
              dados, com foco em clareza técnica, manutenção e evolução contínua.
            </p>
            <div className="projetos-github-status" aria-live="polite">
              <span>{githubStats.synced} projetos sincronizados com GitHub</span>
              <span>{githubStats.generated} novos destaques</span>
              {githubStatus && <span>{githubStatus}</span>}
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
