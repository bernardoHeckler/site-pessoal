import { useState } from "react";
import Card from "../components/Card";
import "./Contato.css";
import Form from "../components/Form";
import { MdContentCopy, MdCheckCircle, MdEmail, MdWork } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

const emailContato = "bernaheckler1@gmail.com";

const oportunidades = [
  {
    titulo: "Full Stack Júnior",
    descricao: "Front-end, back-end, APIs, manutenção e evolução de aplicações web.",
  },
  {
    titulo: "Dados e automações",
    descricao: "Pipelines, SQL, Python, dashboards e organização de fluxos de dados.",
  },
  {
    titulo: "Conexões profissionais",
    descricao: "Networking, comunidades, parcerias técnicas e conversas sobre carreira.",
  },
];

const linksContato = [
  {
    nome: "LinkedIn",
    href: "https://www.linkedin.com/in/bernardo-heckler-645153305/",
    icone: FaLinkedin,
  },
  {
    nome: "GitHub",
    href: "https://github.com/bernardoHeckler",
    icone: FaGithub,
  },
];

const Contato = () => {
  const [copiarEmail, setCopiarEmail] = useState(false);
  const [erroCopia, setErroCopia] = useState(false);

  const handleCopiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailContato);
      setErroCopia(false);
      setCopiarEmail(true);
    } catch {
      setErroCopia(true);
    }
    setTimeout(() => {
      setCopiarEmail(false);
      setErroCopia(false);
    }, 3000);
  };

  return (
    <>
      <div id="animated-background"></div>
      <Card />
      <main className="contato-container">
        <section className="contato-section">
          <div className="contato-hero">
            <span className="contato-eyebrow">Vamos conversar</span>
            <h1>Entre em Contato</h1>
            <div className="barra"></div>
            <p>
              Aberto a conversas sobre desenvolvimento full stack, dados,
              tecnologia e oportunidades que façam sentido para evolução
              profissional.
            </p>
          </div>

          <div className="contato-oportunidades" aria-label="Tipos de contato">
            {oportunidades.map((oportunidade) => (
              <article key={oportunidade.titulo} className="contato-oportunidade">
                <MdWork size={22} />
                <h2>{oportunidade.titulo}</h2>
                <p>{oportunidade.descricao}</p>
              </article>
            ))}
          </div>

          <div className="linha-caixa">
            <div className="caixa">
              <div className="contato-email-header">
                <MdEmail size={24} />
                <div>
                  <span>E-mail principal</span>
                  <h3>{emailContato}</h3>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopiarEmail}
                className={`btn-copiar ${copiarEmail ? "btn-copiado" : ""}`}
              >
                {copiarEmail ? "Email Copiado" : "Copiar Email"}
                {copiarEmail ? <MdCheckCircle size={24} /> : <MdContentCopy size={24} />}
              </button>
              <p className="copiar-status" aria-live="polite">
                {erroCopia
                  ? "Não foi possível copiar automaticamente. O e-mail está visível acima."
                  : copiarEmail
                    ? "E-mail pronto para colar na sua mensagem."
                    : "Resposta normalmente pelo e-mail ou LinkedIn."}
              </p>
            </div>
          </div>

          <div className="contato-links" aria-label="Links profissionais">
            {linksContato.map((link) => {
              const IconeLink = link.icone;
              return (
                <a
                  key={link.nome}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconeLink size={20} />
                  {link.nome}
                </a>
              );
            })}
          </div>

          <div className="contato-form-panel">
            <div className="contato-form-copy">
              <span>Mensagem direta</span>
              <h2>Conte rapidamente o contexto</h2>
              <p>
                Para oportunidades, inclua vaga, formato, stack esperada e
                melhor canal de retorno.
              </p>
            </div>
            <Form />
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};
export default Contato;
