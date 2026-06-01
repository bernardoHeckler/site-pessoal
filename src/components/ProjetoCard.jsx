import { useRef } from "react";
import LazyImage from "./LazyImage";
import { MdInfoOutline, MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const ProjetoCard = ({ projeto, onCardClick }) => {
  const getTipoProjeto = (categoria) => {
    switch (categoria) {
      case "aplicacao":
        return "Aplicação";
      case "design":
        return "Design Web";
      case "web":
        return "Desenvolvimento Web";
      case "java":
        return "Desenvolvimento Java";
      case "api":
        return "APIs";
      case "app mobile":
        return "App Mobile";
      case "dados":
        return "Dados";
      default:
        return "Outro";
    }
  };

  const cardRef = useRef(null);
  const tecnologiasPrincipais = projeto.tecnologias?.slice(0, 4) || [];
  const descricao =
    projeto.descricao || "Projeto em evolução, com detalhes disponíveis no repositório ou na visualização completa.";

  const handleOpenDetails = () => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    onCardClick(projeto);
  };

  return (
    <article className="card-projeto" ref={cardRef}>
      <button
        type="button"
        className="projeto-card-main"
        onClick={handleOpenDetails}
      >
        <LazyImage src={projeto.imagem} alt={projeto.titulo} />
        <div className="text">
          <div className="projeto-card-heading">
            <h3 className="nome-projeto">{projeto.titulo}</h3>
            <div className="projeto-card-meta">
              <span className="tipo-projeto">{getTipoProjeto(projeto.categoria)}</span>
              {projeto.sincronizadoGithub && (
                <span className="github-card-badge">
                  {projeto.origemGithub ? "Destaque GitHub" : "GitHub"}
                </span>
              )}
            </div>
          </div>

          <p className="projeto-card-descricao">{descricao}</p>

          {tecnologiasPrincipais.length > 0 && (
            <div className="projeto-card-tags" aria-label={`Tecnologias de ${projeto.titulo}`}>
              {tecnologiasPrincipais.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          )}
        </div>
      </button>

      <div className="projeto-card-actions">
        <button type="button" onClick={handleOpenDetails}>
          <MdInfoOutline size={18} />
          Detalhes
        </button>
        {projeto.repositorio && (
          <a href={projeto.repositorio} target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
            Código
          </a>
        )}
        {projeto.demo && (
          <a href={projeto.demo} target="_blank" rel="noopener noreferrer">
            <MdOpenInNew size={18} />
            Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjetoCard;
