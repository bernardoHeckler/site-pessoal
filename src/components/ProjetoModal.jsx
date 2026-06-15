import "./ProjetoModal.css";

const formatDate = (date) => {
  if (!date) return null;
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
};

const ProjetoModal = ({ projeto, onClose }) => {
  const github = projeto.github;
  const atualizadoEm = formatDate(github?.updatedAt);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <img src={projeto.imagem} alt={projeto.titulo} />
          <h2>{projeto.titulo}</h2>
        </div>

        <div className="modal-body">
          <p className="projeto-descricao">{projeto.descricao}</p>

          {github && (
            <div className="github-modal-panel">
              <span>Stars: {github.stars || 0}</span>
              <span>Forks: {github.forks || 0}</span>
              {github.language && <span>Linguagem: {github.language}</span>}
              {atualizadoEm && <span>Atualizado: {atualizadoEm}</span>}
            </div>
          )}

          <div className="projeto-tecnologias">
            <h3>Tecnologias utilizadas</h3>
            <div className="tags">
              {projeto.tecnologias?.map((tech, index) => (
                <span key={index} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="projeto-links">
            {" "}
            {projeto.repositorio && (
              <a
                href={projeto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                Ver Repositório{" "}
              </a>
            )}{" "}
            {projeto.demo && (
              <a
                href={projeto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                Ver Demo{" "}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoModal;
