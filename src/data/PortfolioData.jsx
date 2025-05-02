import projetoPortfolioImg from "../imgportfolio.svg";
import projetoImcCalcImg from "../imgimccalc.svg";
import projetoChatBotImg from "../imgchatbot.svg";
import projetoProfileImg from "../imgprofile.svg";
import projetoCatalogoFilmesImg from "../imgcatalogofilmes.svg";
import projetosDeTelaImg from "../imgprojetosdetela.svg";

const PortfolioData = {
  projetos: [
    {
      id: 1,
      titulo: "Portfólio Pessoal 2024",
      imagem: projetoPortfolioImg,
      categoria: "Design Web",
    },
    {
      id: 2,
      titulo: "IMC com REACT",
      imagem: projetoImcCalcImg,
      categoria: "aplicacao",
    },
    {
      id: 3,
      titulo: "ChatBot WhatsApp",
      imagem: projetoChatBotImg,
      categoria: "aplicacao",
    },
    {
      id: 4,
      titulo: "Cartão de Visitas",
      imagem: projetoProfileImg,
      categoria: "Desenvolvimento Web",
    },
    {
      id: 5,
      titulo: "Catálogo de Filmes",
      imagem: projetoCatalogoFilmesImg,
      categoria: "Desenvolvimento Web",
    },
    {
      id: 6,
      titulo: "Projetos de Tela",
      imagem: projetosDeTelaImg,
      categoria: "Design Web",
    },
  ],

  categorias: [
    { id: "todos", nome: "Todos" },
    { id: "Design Web", nome: "Design Web" },
    { id: "aplicacao", nome: "Aplicações" },
    { id: "Desenvolvimento Web", nome: "Desenvolvimento Web" },
  ],
};

export default PortfolioData;
