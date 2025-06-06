import { useState } from "react";
import Card from "../components/Card";
import "./Contato.css";
import Form from "../components/Form";
import iconeCopiar from "../svg/iconeCopiar.svg";
import iconeCopiado from "../svg/iconeOK.svg";

const Contato = () => {
  const [copiarEmail, setCopiarEmail] = useState(false);

  const handleCopiarEmail = () => {
    const email = "bernaheckler1@gmail.com";
    setCopiarEmail(true);
    navigator.clipboard.writeText(email);
    setTimeout(() => {
      setCopiarEmail(false);
    }, 3000);
  };

  return (
    <>
      <Card />
      <main className="contato-container">
        <section className="contato-section">
          <h1>Entre em Contato</h1>
          <div className="barra"></div>
          <div className="linha-caixa">
            <div className="caixa">
              <h3>bernaheckler1@gmail.com</h3>
              <button
                onClick={handleCopiarEmail}
                className={`btn-copiar ${copiarEmail ? "btn-copiado" : ""}`}
              >
                {copiarEmail ? "Email Copiado" : "Copiar Email"}
                <img src={copiarEmail ? iconeCopiado : iconeCopiar} alt="Copiar" />
              </button>
            </div>
          </div>
          <Form />
        </section>
      </main>
    </>
  );
};
export default Contato;