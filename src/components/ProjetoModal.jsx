import { useEffect, useRef } from "react";
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
  const contentRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  useEffect(() => {
    lastFocusedElementRef.current = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !contentRef.current) return;

      const focusableElements = contentRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        contentRef.current.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      lastFocusedElementRef.current?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <section
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="projeto-modal-title"
        aria-describedby="projeto-modal-description"
        ref={contentRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          aria-label={`Fechar detalhes de ${projeto.titulo}`}
          ref={closeButtonRef}
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-header">
          <img src={projeto.imagem} alt={`Preview do projeto ${projeto.titulo}`} />
          <h2 id="projeto-modal-title">{projeto.titulo}</h2>
        </div>

        <div className="modal-body">
          <p className="projeto-descricao" id="projeto-modal-description">
            {projeto.descricao}
          </p>

          {github && (
            <div className="github-modal-panel" aria-label="Indicadores do repositório no GitHub">
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
            {projeto.repositorio && (
              <a
                href={projeto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
                aria-label={`Abrir repositório de ${projeto.titulo}`}
              >
                Ver Repositório
              </a>
            )}
            {projeto.demo && (
              <a
                href={projeto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
                aria-label={`Abrir demonstração de ${projeto.titulo}`}
              >
                Ver Demo
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjetoModal;
