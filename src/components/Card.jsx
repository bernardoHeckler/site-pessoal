import { useEffect, useState } from "react";
import "./Card.css";
import CardData from "../data/CardData";
import LazyImage from "./LazyImage";
import { MdEmail, MdWork } from "react-icons/md";

const Card = ({ setSessaoAtiva }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [mostrar, setMostrar] = useState(window.innerWidth > 768);
  const alterar = () => setMostrar(!mostrar);
  const isHome = typeof setSessaoAtiva === "function";

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMostrar(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`card-container ${isHome ? "home-profile-card" : ""}`}>
      <aside className={isHome ? "home-card" : ""}>
        {isMobile && !mostrar && (
          <div className="canto">
            <button className="btn-canto" onClick={alterar}>
              <CardData.icones.seta size={12} />
            </button>
          </div>
        )}

        <div
          className={`content-acima ${
            isMobile && !mostrar ? "compacto" : ""
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
            {isHome && <span className="home-eyebrow">Portfólio 2026/2027</span>}
            <h1>{CardData.perfil.nome}</h1>
            <p className="caixaDev">{CardData.perfil.profissao}</p>
            {isHome && (
              <>
                <p className="home-headline">{CardData.perfil.headline}</p>
                <div className="home-stack" aria-label="Tecnologias principais">
                  {CardData.perfil.stack.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </div>
                <div className="home-actions">
                  <button type="button" onClick={() => setSessaoAtiva("portfolio")}>
                    <MdWork size={18} />
                    Ver projetos
                  </button>
                  <button type="button" onClick={() => setSessaoAtiva("contato")}>
                    <MdEmail size={18} />
                    Contato
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {mostrar ? (
          <>
            {isHome && (
              <div className="home-destaques">
                {CardData.destaques.map((destaque) => (
                  <div key={destaque.id} className="home-destaque">
                    <strong>{destaque.valor}</strong>
                    <span>{destaque.rotulo}</span>
                  </div>
                ))}
              </div>
            )}
            <div className={`content-abaixo ${isHome ? "home-content-abaixo" : ""}`}>
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
            {isMobile && (
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
