import { useState, useEffect } from "react";
import "./Card.css";
import CardData from "../data/CardData";

const Card = () => {
  const [mostrar, setMostrar] = useState(window.innerWidth > 768);
  const alterar = () => setMostrar(!mostrar);

  const verificarLargura = () => {
    setMostrar(window.innerWidth > 768);
  };

  useEffect(() => {
    const handleResize = () => {
      verificarLargura();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="card-container">
      <aside>
        {!mostrar && (
          <div className="canto">
            <button className="btn-canto" onClick={alterar}>
              <img src={CardData.icones.seta} alt="Mostrar conteúdo" />
            </button>
          </div>
        )}

        <div
          className={`content-acima ${
            window.innerWidth <= 768 && !mostrar ? "compacto" : ""
          }`}
        >
          <div className={`caixaPerfil ${mostrar ? "expandido" : ""}`}>
            <img
              className={`tamanhoFoto ${mostrar ? "expandido" : ""}`}
              src={CardData.perfil.foto}
              alt="Foto perfil"
            />
          </div>
          <div className="texto">
            <h1>{CardData.perfil.nome}</h1>
            <p className="caixaDev">{CardData.perfil.profissao}</p>
          </div>
        </div>

        {mostrar ? (
          <>
            <div className="content-abaixo">
              <div className="barraLinha"></div>
              <div className="links">
                {CardData.contatos.map((contato) => (
                  <div key={contato.id} className="informacoes">
                    <div className="caixaImg">
                      <img src={contato.icone} alt={`Ícone ${contato.tipo}`} />
                    </div>
                    <div className="textoLinks">
                      <p className="subText">{contato.tipo}</p>
                      {contato.link ? (
                        <a href={contato.link}>{contato.valor}</a>
                      ) : (
                        <p>{contato.valor}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="barraLinha"></div>
              <div className="iconesSociais">
                {CardData.redesSociais.map((rede) => (
                  <a
                    key={rede.id}
                    href={rede.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={rede.icone} alt={`Meu ${rede.nome}`} />
                  </a>
                ))}
              </div>
            </div>
            {!mostrar && (
              <div className="canto-baixo">
                <button className="btn-canto-invertido" onClick={alterar}>
                  <img src={CardData.icones.seta} alt="Botão Alterar" />
                </button>
              </div>
            )}
          </>
        ) : null}
      </aside>
    </div>
  );
};

export default Card;
