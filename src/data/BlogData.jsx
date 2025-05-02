import blogSiteImg from "../imgsitenovo.svg";
import blogReactImg from "../imgblogreactpost.svg";

const BlogData = {
    titulo: "Blog",
    posts: [
      {
        id: 1,
        imagem: blogSiteImg,
        categoria: "Boas Vindas!",
        data: "02/05/2025",
        titulo: "Site novo Inaugurado",
        descricao: "Fiz este site com muito cuidado e carinho. Foi um projeto que me fez aprender muito e me ajudou a me desenvolver como profissional.",
      },
      {
        id: 2,
        imagem: blogReactImg,
        categoria: "Curtindo aprender",
        data: "01/03/2025",
        titulo: "Como foi utilizar o React",
        descricao: "Foi algo que só agregou a criar personalidade e criatividade. Foi algo que me fez aprender muito e me ajudou a me desenvolver como profissional.",
      },
    ]
  };
  
  export default BlogData;