import projetoPortfolioImg from "../svg/imgportfolio.svg";
import projetoImcCalcImg from "../svg/imgimccalc.svg";
import projetoChatBotImg from "../svg/imgchatbot.svg";
import projetoProfileImg from "../svg/imgprofile.svg";
import projetoCatalogoFilmesImg from "../svg/imgcatalogofilmes.svg";
import projetosDeTelaImg from "../svg/imgprojetosdetela.svg";
import projetoDeGestao from "../svg/imgprojetosGestaoPoo.svg";
import projetoDeBiblioteca from "../svg/imgprojetosBiblioteca.svg";
import projetoListaDeTarefas from "../svg/imgprojetosListadeTarefas.svg";
import projetoAcademico from "../svg/imgprojetosTelasACM.svg";
import projetoEbooks from "../svg/imgprojetosEbooks.svg";
import projetoPedagio from "../svg/imgprojetosPedagio.svg";
import apitrabalho from "../svg/apitrabalho.svg";
import apimicroservices from "../svg/apimicroservice.svg";
import briqueshop from "../svg/briqueshop.svg";
import compassUOL from "../svg/compass uol.svg";
import TreEBook from "../svg/TreE-Book.svg";

const ProjetosData = {
  projetos: [
    {
      id: 98,
      target: "_blank",
      titulo: "Scholarship Compass UOL",
      imagem: compassUOL,
      categoria: "dados",
      descricao:
        "Este Repositório conta toda a minha trajetória e conquistas que tive durante o Estágio na Compass UOL. Ele reflete minha evolução técnica em Engenharia de Dados, ferramentas AWS e a maturidade adquirida em projetos reais. Convido você, a explorar a documentação e os marcos dessa jornada!",
      tecnologias: ["Jupyter Notebook", "Python", "AWS", "SQL"],
      repositorio: "https://github.com/bernardoHeckler/scholarship-compass.git",
      demo: "https://github.com/bernardoHeckler/scholarship-compass/blob/main/README.md",
    },
    {
      id: 99,
      target: "_blank",
      titulo: "TreE-Book",
      imagem: TreEBook,
      categoria: "app mobile",
      descricao:
        "TreE-Book é um aplicativo mobile desenvolvido em React Native com Expo (JavaScript) que consome dados de uma API em Java, responsável por todo o modelo de negócio da aplicação. Trata-se de uma plataforma completa de e-commerce especializada em livros digitais, construída com arquitetura de microserviços. O projeto foi desenvolvido em equipe, utilizando a metodologia ágil SCRUM, e tem caráter de trabalho acadêmico, com foco em boas práticas de desenvolvimento, organização e escalabilidade.",
      tecnologias: ["React Native", "Java", "Spring Boot", "PostgreSQL", "APIs", "Documentação"],
      repositorio: "https://github.com/orgs/aula-projeto-4o-semestre/repositories",
      demo: "https://www.figma.com/design/UNNm2LZawDmRxDy8XKBDmr/WireFrames-do-TreE-book?m=auto&t=d4Pz3IKKdlaNgei0-1",
    },
    {
      id: 1,
      target: "_blank",
      titulo: "BriqueShop",
      imagem: briqueshop,
      categoria: "app mobile",
      descricao:
        "BriqueShop - É um aplicativo mobile em React Native com Expo (JavaScript) que consome os dados da Fake-Store-API. O aplicativo mostra diversos produtos por categorias para você explorar.",
      tecnologias: ["React Native", "JavaScript", "Expo", "Fake-Store-API"],
      repositorio: "https://github.com/bernardoHeckler/BriqueShop",
      demo: null,
    },
    {
      id: 10,
      target: "_blank",
      titulo: "API Java SpringBoot",
      imagem: apitrabalho,
      categoria: "api",
      descricao:
        "API RESTful desenvolvida em Java com Spring Boot para gerenciar recursos de uma aplicação, incluindo operações CRUD e autenticação.",
      tecnologias: ["Java", "Spring Boot", "RESTful API"],
      repositorio: "https://github.com/bernardoHeckler/API-Java-SpringBoot",
      demo: null,
    },
    {
      id: 14,
      target: "_blank",
      titulo: "Microservices-Java",
      imagem: apimicroservices,
      categoria: "api",
      descricao:
        "Projeto de microsserviços em Java utilizando Spring Boot para criar uma arquitetura escalável e modular, facilitando a manutenção e o desenvolvimento independente de cada serviço.",
      tecnologias: ["Java", "Spring Boot", "RESTful API"],
      repositorio: "https://github.com/bernardoHeckler/Microservices-Java",
      demo: null,
    },
    {
      id: 15,
      target: "_blank",
      titulo: "Projetos Pessoal 2024",
      imagem: projetoPortfolioImg,
      categoria: "design",
      descricao:
        "Design completo dos meus projetos pessoais, desenvolvido com Figma utilizando conceitos modernos de UI/UX.",
      tecnologias: ["Figma", "UI/UX Design", "Prototipagem"],
      repositorio: null,
      demo: "https://www.figma.com/design/koC9cc5OO6by74aIBBJJzv/meu-portf%C3%B3lio-e-telas-din%C3%A2micas?node-id=0-1&t=xZ7DlWkNGYFROLOW-1",
    },
    {
      id: 2,
      target: "_blank",
      titulo: "Calculadora de IMC",
      imagem: projetoImcCalcImg,
      categoria: "aplicacao",
      descricao:
        "Aplicação web simples para calcular o Índice de Massa Corporal (IMC) com base na altura e peso do usuário.",
      tecnologias: ["Curso", "React", "JavaScript", "CSS"],
      repositorio: "https://github.com/bernardoHeckler/calculadora_de_IMC",
      demo: "https://bernardoheckler.github.io/calculadora_de_IMC/",
    },
    {
      id: 3,
      target: "_parent",
      titulo: "ChatBot WhatsApp",
      imagem: projetoChatBotImg,
      categoria: "aplicacao",
      descricao:
        "Projeto de um ChatBot para WhatsApp utilizando a API do Twilio, capaz de responder perguntas frequentes e fornecer informações automatizadas usando o Gemini Flash 2.5",
      tecnologias: ["Node.js", "Express", "Gemini Flash 2.5"],
      repositorio: null,
      demo: null,
    },
    {
      id: 4,
      target: "_blank",
      titulo: "Cartão de Visitas",
      imagem: projetoProfileImg,
      categoria: "web",
      descricao:
        "Projeto de um cartão de visitas digital interativo, desenvolvido com React, HTML, CSS e JavaScript, para facilitar o compartilhamento de informações profissionais online.",
      tecnologias: ["React", "JavaScript", "HTML", "CSS"],
      repositorio: "https://github.com/bernardoHeckler/profiles",
      demo: "https://bernardoheckler.github.io/profiles/",
    },
    {
      id: 5,
      target: "_blank",
      titulo: "Catálogo de Filmes",
      imagem: projetoCatalogoFilmesImg,
      categoria: "web",
      descricao:
        "Aplicação web de catálogo de filmes que consome a API do TMDB para exibir informações detalhadas sobre filmes, incluindo sinopse, elenco e avaliações.",
      tecnologias: ["React", "JavaScript", "API TMDB", "CSS"],
      repositorio: "https://github.com/bernardoHeckler/react-filme",
      demo: "https://bernardoheckler.github.io/react-filme/",
    },
    {
      id: 6,
      target: "_blank",
      titulo: "Projetos de Tela",
      imagem: projetosDeTelaImg,
      categoria: "design",
      descricao:
        "Designs de várias telas para diferentes tipos de projetos, focando em usabilidade e estética visual.",
      tecnologias: ["Figma", "UI/UX Design", "Prototipagem"],
      repositorio: null,
      demo: "https://www.figma.com/design/RNMCI4VTR5gtM3PpmufQj7/projetos-git-hub?node-id=0-1&t=mqRLtPagYUFPOAA7-1",
    },
    {
      id: 7,
      target: "_blank",
      titulo: "Gestão de Custo - POO",
      imagem: projetoDeGestao,
      categoria: "java",
      descricao:
        "Projeto de sistema de gestão de custos desenvolvido em Java, aplicando conceitos de Programação Orientada a Objetos (POO) para organizar e controlar despesas.",
      tecnologias: ["Java", "Orientação a Objetos"],
      repositorio:
        "https://github.com/bernardoHeckler/gerenciamento-de-custos-com-combustivel",
      demo: null,
    },
    {
      id: 8,
      target: "_blank",
      titulo: "Gestão de Biblioteca - POO",
      imagem: projetoDeBiblioteca,
      categoria: "java",
      descricao:
        "Sistema de gestão de biblioteca desenvolvido em Java, utilizando Programação Orientada a Objetos (POO) para gerenciar livros, usuários e empréstimos de forma eficiente.",
      tecnologias: ["Java", "Orientação a Objetos"],
      repositorio: "https://github.com/bernardoHeckler/gestao-de-biblioteca",
      demo: null,
    },
    {
      id: 9,
      target: "_blank",
      titulo: "Lista de Tarefas",
      imagem: projetoListaDeTarefas,
      categoria: "web",
      descricao: null,
      tecnologias: ["React", "HTML", "CSS", "JavaScript"],
      repositorio: "https://github.com/bernardoHeckler/basics-js.github.io.git",
      demo: "https://bernardoheckler.github.io/basics-js.github.io/Projeto%232_ListaDeTarefas/",
    },

    {
      id: 11,
      target: "_blank",
      titulo: "Projeto de Telas",
      imagem: projetoAcademico,
      categoria: "design",
      descricao:
        "Conjunto de designs de telas para um projeto acadêmico, focando em uma interface amigável e funcional.",
      tecnologias: ["Figma", "UI/UX Design", "Prototipagem"],
      repositorio: null,
      demo: "https://www.figma.com/design/pRv0DpZDE7SPC8VMAG7RPf/PROT%C3%93TIPOS-AQUI...?node-id=0-1&p=f",
    },
    {
      id: 12,
      target: "_blank",
      titulo: "e-Books PDF",
      imagem: projetoEbooks,
      categoria: "aplicacao",
      descricao:
        "Coleção de e-books em PDF sobre programação, cobrindo diversos tópicos e linguagens para iniciantes e desenvolvedores experientes. ",
      tecnologias: ["PDF"],
      repositorio: "https://github.com/bernardoHeckler/e-books-programacao",
      demo: null,
    },
    {
      id: 13,
      target: "_blank",
      titulo: "Pagamento de Pedágios",
      imagem: projetoPedagio,
      categoria: "java",
      descricao:
        "Sistema de pagamento de pedágios desenvolvido em Java, aplicando conceitos de Programação Orientada a Objetos (POO) para gerenciar transações e veículos.",
      tecnologias: ["Java", "Orientação a Objetos"],
      repositorio: "https://github.com/bernardoHeckler/pedagio-java",
      demo: null,
    },
    
  ],

  categorias: [
    { id: "todos", nome: "Todos" },
    { id: "design", nome: "Design Web" },
    { id: "aplicacao", nome: "Aplicações" },
    { id: "web", nome: "Desenvolvimento Web" },
    { id: "java", nome: "Desenvolvimento Java" },
    { id: "app mobile", nome: "App Mobile" },
    { id: "api", nome: "APIs" },
    { id: "dados", nome: "Dados" },
  ],
};

export default ProjetosData;
