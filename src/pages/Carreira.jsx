import Card from "../components/Card";
import CarreiraData from "../data/CarreiraData";
import "./Carreira.css";
import Footer from "../components/Footer";

const Carreira = () => {
  return (
    <>
      <div id="animated-background"></div>
      <Card />
      <main className="career-container">
        <section className="career-section">
          <div className="linha">
            <h1>{CarreiraData.titulo}</h1>
            <div className="barra"></div>
          </div>

          {/* Seção Experiência */}
          <div className="section-header">
            <div className="icon-wrapper">
              <CarreiraData.experiencia.icone
                size={20}
                className="section-icon"
              />
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

          {/* Seção Educação */}
          <div className="section-header">
            <div className="icon-wrapper">
              <CarreiraData.educacao.icone size={20} className="section-icon" />
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

          
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Carreira;
