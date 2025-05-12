import "./Form.css";
import IconeEnviar from "../svg/iconeEnviar.svg";

const Form = () => {
  return (
    <div className="container">
      <div className="linha">
        <h2>Ou me envie uma mensagem por aqui!</h2>
      </div>
      <div className="coluna">
        <form
          action="https://formsubmit.co/a598b021463663bcf2a697af4b0095d6"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" placeholder="Nome" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea name="message" placeholder="Mensagem" required></textarea>
          <button className="btn-form" type="submit">
          <img src={IconeEnviar} alt="Enviar" />
          Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
