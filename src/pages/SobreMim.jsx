import "./SobreMim.css";
import SobreMimData from "../data/SobreMimData";
import Card from "../components/Card";
import { MdDownload, MdCheckCircle } from "react-icons/md";
import { useState } from "react";
import curriculoPDF from "../curriculo2025.pdf";
import Footer from "../components/Footer";

const SobreMim = () => {
  const [baixarCurriculo, setBaixarCurriculo] = useState(false);

  const handleBaixarCurriculo = () => {
    const link = document.createElement("a");
    link.href = curriculoPDF;
    link.download = "bHeckler_CV_2025.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setBaixarCurriculo(true);

    setTimeout(() => {
      setBaixarCurriculo(false);
    }, 3000);
  };

  return (
    <>
      <div id="animated-background"></div>
      <Card />
      <main className="sobreMim-container">
        <section className="sobreMim-section">
          <div className="linha">
            <h1>{SobreMimData.titulo}</h1>
            <div className="barra"></div>
            <p className="descricao">{SobreMimData.descricao}</p>
          </div>
          <div className="linha" id="linha-caixa">
            <div className="caixa">
              <h3>Baixar meu Currículo</h3>
              <button
                className={`btn-baixar ${baixarCurriculo ? "btn-baixado" : ""}`}
                onClick={handleBaixarCurriculo}
              >
                {baixarCurriculo ? "CV Baixado" : "Clique aqui"}
                {baixarCurriculo ? <MdCheckCircle size={24} /> : <MdDownload size={24} />}
              </button>
            </div>
          </div>
          <div className="linha">
            <h2>O Que Estou Fazendo</h2>
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
