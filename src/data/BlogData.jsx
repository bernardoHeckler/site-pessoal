import blogSiteImg from "../svg/imgsitenovo.svg";
import blogReactImg from "../svg/imgblogreactpost.svg";
import blogNoticia from "../svg/imgblognoticia.svg";
const BlogData = {
    titulo: "Blog",
    posts: [
      {
        id: 1,
        imagem: blogNoticia,
        categoria: "Minha nova Jornada",
        data: "04/08/2025",
        titulo: "Estágio - Compass UOL",
        descricao: "Estou iniciando uma nova jornada na Compass UOL como Engenheiro de Dados. Estou animado para aprender e crescer nesta nova posição.",
      },
      {
        id: 2,
        imagem: blogSiteImg,
        categoria: "Boas Vindas!",
        data: "15/12/2025",
        titulo: "Site Com Novo Design e Novos Conteúdos",
        descricao: "Meu site pessoal passou por uma reformulação completa, com um novo design moderno e conteúdos atualizados para refletir minhas últimas conquistas e projetos. Explore as novas seções e fique por dentro das minhas novidades!",
      },
      {
        id: 3,
        imagem: blogReactImg,
        categoria: "Curtindo aprender",
        data: "01/03/2025",
        titulo: "Como foi utilizar o React Native",
        descricao: "Estou expandindo meus conhecimentos em **projetos Web e Mobile**, explorando a criação, personalização e aplicação da minha criatividade no desenvolvimento de novos projetos. Essa experiência tem sido fundamental para meu aprendizado contínuo e para o meu desenvolvimento profissional."
      }
    ]
  };
  
  export default BlogData;