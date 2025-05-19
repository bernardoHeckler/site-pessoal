import projetoPortfolioImg from "../svg/imgportfolio.svg";
import projetoImcCalcImg from "../svg/imgimccalc.svg";
import projetoChatBotImg from "../svg/imgchatbot.svg";
import projetoProfileImg from "../svg/imgprofile.svg";
import projetoCatalogoFilmesImg from "../svg/imgcatalogofilmes.svg";
import projetosDeTelaImg from "../svg/imgprojetosdetela.svg";
import projetoDeGestao from "../svg/imgprojetosGestaoPoo.svg";
import projetoDeBiblioteca from "../svg/imgprojetosBiblioteca.svg";

const PortfolioData = {
  projetos: [
    {
      id: 1,
      url: "https://www.figma.com/design/koC9cc5OO6by74aIBBJJzv/meu-portf%C3%B3lio-e-telas-din%C3%A2micas?node-id=0-1&t=RIOEfNEyZFMGLQZ8-1",
      target: "_blank",
      titulo: "Portfólio Pessoal 2024",
      imagem: projetoPortfolioImg,
      categoria: "design",
    },
    {
      id: 2,
      url: "https://bernardoheckler.github.io/calculadora_de_IMC/",
      target: "_blank",
      titulo: "Calculadora de IMC",
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
      categoria: "web",
    },
    {
      id: 5,
      url: "https://bernardoheckler.github.io/react-filme/",
      target: "_blank",
      titulo: "Catálogo de Filmes",
      imagem: projetoCatalogoFilmesImg,
      categoria: "web",
    },
    {
      id: 6,
      url: "https://www.figma.com/design/RNMCI4VTR5gtM3PpmufQj7/projetos-git-hub?node-id=0-1&t=xygVBbRoZE0UPr46-1",
      target: "_blank",
      titulo: "Projetos de Tela",
      imagem: projetosDeTelaImg,
      categoria: "design",
    },
    {
      id: 7,
      url: "https://github.com/bernardoHeckler/gerenciamento-de-custos-com-combustivel.git",
      target: "_blank",
      titulo: "Gestão de Custo - POO",
      imagem: projetoDeGestao,
      categoria: "java",
    },
    {
      id: 8,
      url: "https://github.com/bernardoHeckler/gestao-de-biblioteca.git",
      target: "_blank",
      titulo: "Gestão de Biblioteca - POO",
      imagem: projetoDeBiblioteca,
      categoria: "java",
    }
  ],

  categorias: [
    { id: "todos", nome: "Todos" },
    { id: "design", nome: "Design Web" },
    { id: "aplicacao", nome: "Aplicações" },
    { id: "web", nome: "Desenvolvimento Web" },
    { id: "java", nome: "Desenvolvimento Java" },
  ],
};

export default PortfolioData;
