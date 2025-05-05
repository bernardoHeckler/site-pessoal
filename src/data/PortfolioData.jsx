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
      url: "https://www.figma.com/design/koC9cc5OO6by74aIBBJJzv/meu-portf%C3%B3lio-e-telas-din%C3%A2micas?node-id=0-1&t=RIOEfNEyZFMGLQZ8-1",
      target: "_blank",
      titulo: "Portfólio Pessoal 2024",
      imagem: projetoPortfolioImg,
      categoria: "Design Web",
    },
    {
      id: 2,
      url: "#",
      target: "_parent",
      titulo: "IMC com REACT",
      imagem: projetoImcCalcImg,
      categoria: "aplicacao",
    },
    {
      id: 3,
      url: "#",
      target: "_parent",
      titulo: "ChatBot WhatsApp",
      imagem: projetoChatBotImg,
      categoria: "aplicacao",
    },
    {
      id: 4,
      url: "https://bernardoheckler.github.io/profiles/",
      target: "_blank",
      titulo: "Cartão de Visitas",
      imagem: projetoProfileImg,
      categoria: "Desenvolvimento Web",
    },
    {
      id: 5,
      url: "https://bernardoheckler.github.io/react-filme/",
      target: "_blank",
      titulo: "Catálogo de Filmes",
      imagem: projetoCatalogoFilmesImg,
      categoria: "Desenvolvimento Web",
    },
    {
      id: 6,
      url: "https://www.figma.com/design/RNMCI4VTR5gtM3PpmufQj7/projetos-git-hub?node-id=0-1&t=xygVBbRoZE0UPr46-1",
      target: "_blank",
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
