import "./NavBar.css";

const navItems = [
  { id: "card", label: "Início" },
  { id: "sobreMim", label: "Sobre" },
  { id: "carreira", label: "Carreira" },
  { id: "portfolio", label: "Projetos" },
  { id: "blog", label: "Blog" },
  { id: "contato", label: "Contato" },
];

const NavBar = ({ setSessaoAtiva, sessaoAtiva }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar" aria-label="Navegação principal">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSessaoAtiva(item.id)}
            className={`nav-link ${sessaoAtiva === item.id ? "ativo" : ""}`}
            aria-current={sessaoAtiva === item.id ? "page" : undefined}
          >
            <span className="textoNav">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
