import blogSiteImg from "../imgsitenovo.svg";
import blogReactImg from "../imgblogreactpost.svg";
import blogDesign from "../imgDesign.svg";

const BlogData = {
    titulo: "Blog",
    posts: [
      {
        id: 1,
        imagem: blogDesign,
        categoria: "Criando Interfaces",
        data: "05/05/2025",
        titulo: "Telas de Baixa Fidelidade",
        descricao: "Estou criando alguns designs de baixa fidelidade para projetos acadêmicos.",
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