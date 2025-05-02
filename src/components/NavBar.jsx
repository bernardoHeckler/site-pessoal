// NavBar.jsx
import React from "react";
import "./NavBar.css";

const NavBar = ({ setSessaoAtiva }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button onClick={() => setSessaoAtiva("sobreMim")} className="nav-link">
          <p className="textoNav">Sobre</p>
        </button>
        <button onClick={() => setSessaoAtiva("carreira")} className="nav-link">
          <p className="textoNav">Carreira</p>
        </button>
        <button
          onClick={() => setSessaoAtiva("portfolio")}
          className="nav-link"
        >
          <p className="textoNav">Portfólio</p>
        </button>
        <button onClick={() => setSessaoAtiva("blog")} className="nav-link">
          <p className="textoNav">Blog</p>
        </button>
        <button onClick={() => setSessaoAtiva("contato")} className="nav-link">
          <p className="textoNav">Contato</p>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
