import "./ProjetosNav.css";

const ProjetosNav = ({ categorias, filtroAtual, onFiltroChange }) => {
  return (
    <nav className="projetos-nav">
      {categorias.map((categoria) => (
        <button
          key={categoria.id}
          type="button"
          onClick={() => onFiltroChange(categoria.id)}
          className={filtroAtual === categoria.id ? "ativo" : ""}
          aria-pressed={filtroAtual === categoria.id}
        >
          {categoria.nome}
        </button>
      ))}
    </nav>
  );
};

export default ProjetosNav;
