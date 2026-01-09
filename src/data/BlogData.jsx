import blogSiteImg from "../svg/imgsitenovo.svg";
import blogNoticia from "../svg/imgblognoticia.svg";
import blogCertificado from "../svg/CertificadoCompassUOL.svg";
const BlogData = {
  titulo: "Blog",
  posts: [
    {
      id: 0,
      imagem: blogCertificado,
      categoria: "Conclusão do Estágio",
      data: "30/12/2025",
      titulo: "Estágio AWS Clod Data Engineer",
      descricao:
        "Agradeço a todas as pessoas que cruzaram meu caminho ao longo dessa jornada, finalmente agora, no final de 2025, sou grato a essa experiência. Estou muito feliz de receber esse reconhecimento.",
    },
    {
      id: 1,
      imagem: blogNoticia,
      categoria: "Minha nova Jornada",
      data: "04/08/2025",
      titulo: "Estágio - Compass UOL",
      descricao:
        "Estou iniciando uma nova jornada na Compass UOL como Engenheiro de Dados. Estou animado para aprender e crescer nesta nova posição.",
    },
    {
      id: 2,
      imagem: blogSiteImg,
      categoria: "Boas Vindas!",
      data: "15/12/2025",
      titulo: "Site Com Novo Design e Novos Conteúdos",
      descricao:
        "Meu site pessoal passou por uma reformulação completa, com um novo design moderno e conteúdos atualizados para refletir minhas últimas conquistas e projetos. Explore as novas seções e fique por dentro das minhas novidades!",
    },
  ],
};

export default BlogData;
