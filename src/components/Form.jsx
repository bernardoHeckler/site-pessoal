import "./Form.css";
import { IoSend } from "react-icons/io5";

const Form = () => {
  return (
    <div className="form-container">
      <div className="coluna">
        <form
          action="https://formsubmit.co/a598b021463663bcf2a697af4b0095d6"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="Nova mensagem pelo portfólio"
          />
          <label>
            <span>Nome</span>
            <input type="text" name="name" placeholder="Seu nome" required />
          </label>
          <label>
            <span>E-mail</span>
            <input type="email" name="email" placeholder="seu@email.com" required />
          </label>
          <label>
            <span>Assunto</span>
            <input
              type="text"
              name="subject"
              placeholder="Oportunidade, projeto ou conexão"
              required
            />
          </label>
          <label>
            <span>Mensagem</span>
            <textarea
              name="message"
              placeholder="Descreva o contexto da conversa"
              required
            ></textarea>
          </label>
          <button className="btn-form" type="submit">
            <IoSend size={20} />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
