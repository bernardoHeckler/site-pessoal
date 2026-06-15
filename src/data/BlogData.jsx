import blogSiteImg from "../svg/imgsitenovo.svg";
import blogCertificado from "../svg/CertificadoCompassUOL.svg";
import blogRotaSystem from "../svg/rotaSystem.svg";

const BlogData = {
  titulo: "Atualizações",
  descricao:
    "Registros curtos sobre minha evolução profissional, projetos, aprendizados e decisões técnicas que conectam Full Stack, dados e cloud.",
  posts: [
    {
      id: 0,
      imagem: blogSiteImg,
      categoria: "Portfólio 2026/2027",
      data: "01/06/2026",
      dateTime: "2026-06-01",
      titulo: "Portfólio preparado para novas oportunidades",
      descricao:
        "Atualização focada em apresentação profissional, integração com GitHub, projetos mais claros e posicionamento técnico para oportunidades em desenvolvimento full stack e engenharia de dados.",
      tags: ["React", "GitHub API", "Vercel", "Portfólio"],
    },
    {
      id: 1,
      imagem: blogRotaSystem,
      categoria: "Experiência",
      data: "06/04/2026",
      dateTime: "2026-04-06",
      titulo: "Início como Desenvolvedor Full Stack Júnior",
      descricao:
        "Início de uma nova etapa na Rota System, atuando no desenvolvimento e manutenção de aplicações web, otimização de sistemas internos e evolução de soluções com foco em entrega de valor.",
      tags: ["Full Stack", "React", "Node.js", "SQL"],
    },
    {
      id: 2,
      imagem: blogCertificado,
      categoria: "Engenharia de Dados",
      data: "30/12/2025",
      dateTime: "2025-12-30",
      titulo: "Conclusão da trilha AWS Cloud Data Engineering",
      descricao:
        "Fechamento de uma jornada prática com ETL, modelagem de dados, Python, Docker e serviços AWS, consolidando uma base técnica importante para projetos orientados a dados.",
      tags: ["AWS", "ETL", "Python", "Docker"],
    },
    {
      id: 3,
      imagem: blogSiteImg,
      categoria: "Portfólio",
      data: "15/12/2025",
      dateTime: "2025-12-15",
      titulo: "Novo design e conteúdo atualizado",
      descricao:
        "Reformulação visual do site pessoal para organizar melhor experiências, projetos, tecnologias e formas de contato em uma experiência mais clara para visitantes e recrutadores.",
      tags: ["UI", "React", "Conteúdo", "UX"],
    },
  ],
};

export default BlogData;
