import { useState } from "react";
import "./Card.css";
import CardData from "../data/CardData";
import LazyImage from "./LazyImage";

const Card = () => {
  const [mostrar, setMostrar] = useState(window.innerWidth > 768);
  const alterar = () => setMostrar(!mostrar);

  return (
    <div className="card-container">
      <aside>
        {window.innerWidth <= 768 && !mostrar && (
          <div className="canto">
            <button className="btn-canto" onClick={alterar}>
              <CardData.icones.seta size={12} />
            </button>
          </div>
        )}

        <div
          className={`content-acima ${
            window.innerWidth <= 768 && !mostrar ? "compacto" : ""
          }`}
        >
          <div className={`caixaPerfil ${mostrar ? "expandido" : ""}`}>
            <LazyImage
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
                      <contato.icone size={24} />
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
                    <rede.icone size={24} />
                  </a>
                ))}
              </div>
            </div>
            {window.innerWidth <= 768 && (
              <div className="canto-baixo">
                <button className="btn-canto-invertido" onClick={alterar}>
                  <CardData.icones.seta size={12} style={{ transform: 'rotate(180deg)' }} />
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