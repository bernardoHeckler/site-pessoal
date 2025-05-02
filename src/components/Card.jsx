import React, { useState } from "react";
import "./Card.css";
import CardData from "../data/CardData";

const Card = () => {
  const [mostrar, setMostrar] = useState(false);
  const alterar = () => setMostrar(!mostrar);

  return (
    <div className="container">
      <aside>
        {/* Botão superior */}
        {!mostrar && (
          <div className="canto">
            <button className="btn-canto" onClick={alterar}>
              <img src={CardData.icones.seta} alt="Mostrar conteúdo" />
            </button>
          </div>
        )}
        
        {/* Conteúdo superior */}
        <div className={`content-acima ${!mostrar ? "compacto" : ""}`}>
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
        
        {/* Conteúdo inferior (mostrar quando expandido) */}
        {mostrar && (
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
            <div className="canto-baixo">
              <button className="btn-canto-invertido" onClick={alterar}>
                <img src={CardData.icones.seta} alt="Botão Alterar" />
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Card;