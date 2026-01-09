import "./SobreMim.css";
import SobreMimData from "../data/SobreMimData";
import Card from "../components/Card";
import { useState } from "react";
import Footer from "../components/Footer";
import CaixaDownloadCV from "../components/CaixaDownloadCV";

const SobreMim = () => {
  const [mostrarCompleto, setMostrarCompleto] = useState(false);

  return (
    <>
      <div id="animated-background"></div>
      <Card />
      <main className="sobreMim-container">
        <section className="sobreMim-section">
            <div className="linha">
            <div className="titulo-topo">
              <h1>{SobreMimData.titulo}</h1>
              <CaixaDownloadCV/>
            </div>
            <div className="barra"></div>
            <div className="descricao">
              <p>{SobreMimData.descricao}</p>
              {SobreMimData.descricaoLonga && (
                <>
                  <div
                    className={`descricao-longa ${
                      mostrarCompleto ? "open" : ""
                    }`}
                    aria-expanded={mostrarCompleto}
                  >
                    {mostrarCompleto
                      ? SobreMimData.descricaoLonga.map((paragrafo, idx) => (
                          <p key={idx}>{paragrafo}</p>
                        ))
                      : null}
                  </div>
                  <button
                    className="btn-ler-mais"
                    onClick={() => setMostrarCompleto((s) => !s)}
                  >
                    {mostrarCompleto ? "Ler menos" : "Ler mais"}
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="linha">
            <h2>O Que Estou Fazendo?</h2>
            <div id="coluna-atividades">
              {SobreMimData.atividades.map((atividade) => {
                const IconeAtividade = atividade.icone;
                return (
                  <section key={atividade.id} className="informacao">
                    <div className="conteudo">
                      <IconeAtividade size={32} />
                      <div className="text">
                        <h3>{atividade.titulo}</h3>
                        <p className="descricao">{atividade.descricao}</p>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
          {/* <div className="linha" id="linha-caixa">
            <div className="caixa">
              <h3>Baixar meu Currículo</h3>
              <button
                className={`btn-baixar ${baixarCurriculo ? "btn-baixado" : ""}`}
                onClick={handleBaixarCurriculo}
              >
                {baixarCurriculo ? "CV Baixado" : "Clique aqui"}
                {baixarCurriculo ? (
                  <MdCheckCircle size={24} />
                ) : (
                  <MdDownload size={24} />
                )}
              </button>
            </div>
          </div> */}
          <div className="linha">
            <h2>Futuras Ideias</h2>
            <div className="coluna-ideias">
              {SobreMimData.futurasIdeias.map((ideia) => {
                const IconeIdeia = ideia.icone;
                return (
                  <section key={ideia.id} className="informacao">
                    <div className="blocos">
                      <div className="blocoMaior">
                        <IconeIdeia size={48} />
                      </div>
                      <div className="retangulos">
                        <div className="forma1"></div>
                        <div className="forma2"></div>
                        <div className="forma2"></div>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>

          <div className="linha">
            <h2>Tecnologias</h2>
            <div className="coluna-sobremim-tecnologias">
              {SobreMimData.tecnologias.map((tech) => {
                const IconeTech = tech.icone;
                return (
                  <IconeTech
                    key={tech.id}
                    className="tecnologiasImg"
                    size={48}
                  />
                );
              })}
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default SobreMim;
