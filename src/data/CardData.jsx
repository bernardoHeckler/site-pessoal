import { getSeasonalProfile } from "../utils/seasonalProfile";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { FaXTwitter, FaGithub, FaLinkedin, FaFigma } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

const CardData = {
  perfil: {
    nome: "Bernardo Heckler",
    profissao: "Engenheiro de Dados",
    foto: getSeasonalProfile(),
    desde: "1/11/2022",
    localizacao: "Brazil, Rio Grande do Sul",
  },

  contatos: [
    {
      id: 1,
      tipo: "EMAIL",
      valor: "bernaheckler1@gmail.com",
      icone: MdEmail,
      link: "mailto:bernaheckler1@gmail.com",
    },
    {
      id: 2,
      tipo: "Phone",
      valor: "(54) 9 9641-8356",
      icone: MdPhone,
      link: "tel:+54996418356",
    },
    {
      id: 3,
      tipo: "Programming Since",
      valor: "1/11/2022",
      icone: BiCalendar,
    },
    {
      id: 4,
      tipo: "Local",
      valor: "Brazil, Rio Grande do Sul",
      icone: MdLocationOn,
    },
  ],

  redesSociais: [
    {
      id: 1,
      nome: "Twitter",
      icone: FaXTwitter,
      link: "https://x.com/bhcklr",
    },
    {
      id: 2,
      nome: "Figma",
      icone: FaFigma,
      link: "https://www.figma.com/proto/P0Y51G1NX5v0McdR0160v0/apple-design-portfolio?page-id=23%3A1095&node-id=54-716&p=f&viewport=741%2C260%2C0.35&t=5K9qyUGlczwvKwLV-1&scaling=scale-down-width&content-scaling=fixed",
    },
    {
      id: 3,
      nome: "GitHub",
      icone: FaGithub,
      link: "https://github.com/bernardoHeckler/site-pessoal.git",
    },
    {
      id: 4,
      nome: "LinkedIn",
      icone: FaLinkedin,
      link: "https://www.linkedin.com/in/bernardo-heckler-645153305/",
    },
  ],

  icones: {
    seta: IoChevronDown,
  },
};

export default CardData;
