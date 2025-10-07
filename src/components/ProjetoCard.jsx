import ProjetoModal from "./ProjetoModal";
import { useRef } from "react";

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
      default:
        return "Outro";
    }
  };

  const cardRef = useRef(null);

  const handleClick = () => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", 
      });
    }
    onCardClick(projeto);
  };

  return (
    <>
      <figure className="card-projeto" onClick={handleClick} ref={cardRef}>
        <div className="link-projeto">
          <img src={projeto.imagem} alt={projeto.titulo} />
          <div className="text">
            <h3 className="nome-projeto">{projeto.titulo}</h3>
            <p className="tipo-projeto">{getTipoProjeto(projeto.categoria)}</p>
          </div>
        </div>
      </figure>
    </>
  );
};

export default ProjetoCard;
