import setinha from "../svg/setinha.svg";
import logo from "../svg/fotoperfil.svg";
import iconeEmail from "../svg/iconeEmail.svg";
import iconeTelefone from "../svg/iconeTelefone.svg";
import iconeAgenda from "../svg/iconeAgenda.svg";
import iconeLocal from "../svg/iconeLocal.svg";
import iconeX from "../svg/iconeTwitter.svg";
import iconeFigma from "../svg/iconeFigma.svg";
import iconeGitHub from "../svg/iconeGitHub.svg";
import iconeLinkedIn from "../svg/iconeLinkedin.svg";

const CardData = {
  perfil: {
    nome: "Bernardo Heckler",
    profissao: "FrontEnd Junior",
    foto: logo,
    desde: "1/11/2022",
    localizacao: "Brazil, Rio Grande do Sul",
  },

  contatos: [
    {
      id: 1,
      tipo: "EMAIL",
      valor: "bernaheckler1@gmail.com",
      icone: iconeEmail,
      link: "mailto:bernaheckler1@gmail.com",
    },
    {
      id: 2,
      tipo: "Phone",
      valor: "(54) 9 9641-8356",
      icone: iconeTelefone,
      link: "tel:+54996418356",
    },
    {
      id: 3,
      tipo: "Programming Since",
      valor: "1/11/2022",
      icone: iconeAgenda,
    },
    {
      id: 4,
      tipo: "Local",
      valor: "Brazil, Rio Grande do Sul",
      icone: iconeLocal,
    },
  ],

  redesSociais: [
    {
      id: 1,
      nome: "Twitter",
      icone: iconeX,
      link: "https://x.com/bhcklr",
    },
    {
      id: 2,
      nome: "Figma",
      icone: iconeFigma,
      link: "https://www.figma.com/proto/P0Y51G1NX5v0McdR0160v0/apple-design-portfolio?page-id=23%3A1095&node-id=54-716&p=f&viewport=741%2C260%2C0.35&t=5K9qyUGlczwvKwLV-1&scaling=scale-down-width&content-scaling=fixed",
    },
    {
      id: 3,
      nome: "GitHub",
      icone: iconeGitHub,
      link: "https://github.com/bernardoHeckler/site-pessoal.git",
    },
    {
      id: 4,
      nome: "LinkedIn",
      icone: iconeLinkedIn,
      link: "https://www.linkedin.com/in/bernardo-heckler-645153305/",
    },
  ],

  icones: {
    seta: setinha,
  },
};

export default CardData;
