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
        data: "02/05/2025",
        titulo: "Site novo Inaugurado",
        descricao: "Fiz este site com muito cuidado e carinho. Foi um projeto que me fez aprender muito e me ajudou a me desenvolver como profissional.",
      },
      {
        id: 3,
        imagem: blogReactImg,
        categoria: "Curtindo aprender",
        data: "01/03/2025",
        titulo: "Como foi utilizar o React",
        descricao: "Foi algo que só agregou a criar personalidade e criatividade. Foi algo que me fez aprender muito e me ajudou a me desenvolver como profissional.",
      },
    ]
  };
  
  export default BlogData;