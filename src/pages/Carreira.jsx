import React from "react";
import Card from "../components/Card";
import CarreiraData from "../data/CarreiraData";
import "./Carreira.css";
import IconeImg from "../iconeImg.svg";

const Carreira = () => {
  return (
    <div>
      <Card />
      <main className="career-container">
        <section className="career-section">
          <div className="linha-carreira">
            <h1>{CarreiraData.titulo}</h1>
            <div className="barra"></div>
          </div>

          {/* Seção Educação */}
          <div className="section-header">
            <div className="icon-wrapper">
              <img src={IconeImg} alt="icone" className="section-icon" />
            </div>
            <h3 className="section-title">{CarreiraData.educacao.titulo}</h3>
          </div>

          <ol className="timeline-list">
            {CarreiraData.educacao.itens.map((item) => (
              <li key={item.id} className="timeline-item">
                <h4 className="item-title">{item.instituicao}</h4>
                <span className="item-period">{item.periodo}</span>
                <p className="item-description">{item.descricao}</p>
              </li>
            ))}
          </ol>
          {/* Seção Experiência */}
          <div className="section-header">
            <div className="icon-wrapper">
              <img src={IconeImg} alt="icone" className="section-icon" />
            </div>
            <h3 className="section-title">{CarreiraData.experiencia.titulo}</h3>
          </div>

          <ol className="timeline-list">
            {CarreiraData.experiencia.itens.map((item) => (
              <li key={item.id} className="timeline-item">
                <h4 className="item-title">{item.posicao}</h4>
                <span className="item-period">{item.periodo}</span>
                <p className="item-description">{item.descricao}</p>
              </li>
            ))}
          </ol>

          {/* Seção Habilidades */}
          <div className="linha">
            <h2>{CarreiraData.habilidades.titulo}</h2>
            <section className="informacao">
              {CarreiraData.habilidades.itens.map((habilidade) => (
                <div key={habilidade.id} className="skill">
                  <h3>
                    {habilidade.nome} <span>{habilidade.porcentagem}%</span>
                  </h3>
                  <div className="barra-interativa">
                    <div
                      id={habilidade.idBarra}
                      style={{ width: `${habilidade.porcentagem}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Carreira;
