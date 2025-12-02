import { MdSchool, MdWork, MdAdd } from "react-icons/md";
import { SiPython, SiMysql, SiReact, SiFigma, SiJavascript, SiHtml5, SiCss3, SiGit, SiPostman, SiDocker, SiJupyter, SiAnaconda, SiPandas, SiNumpy } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaAws, FaJava } from "react-icons/fa";

const SobreMimData = {
  titulo: "Sobre Mim",
  descricao: "Sou Bernardo Heckler, um Engenheiro de Dados em construção e um verdadeiro arquiteto do mundo digital. Na Compass UOL, atuo na linha de frente, onde os dados ganham vida. É como se eu fosse um maestro regendo uma orquestra de informações, transformando bytes brutos em notas musicais claras e estratégicas para o negócio. Minha rotina é movida pelo desafio de construir e otimizar pipelines de dados, garantindo que cada informação chegue ao seu destino com perfeição. Utilizo o poder do Python e SQL para moldar, organizar e purificar esses dados, e aprendo diariamente as melhores práticas de ETL e engenharia de dados. No dia a dia, colaboro ativamente em Sprints, acompanhando o fluxo no Kanban e garantindo que cada entrega seja uma vitória meu desenvolvimento profissional e pessoal. Para mim, os dados são a matéria-prima do futuro, e meu objetivo é continuar transformando-os em insights valiosos e soluções que realmente fazem a diferença.",

  atividades: [
    {
      id: 1,
      titulo: "Análise de Dados",
      icone: IoAnalytics,
      descricao:
        "Aprimorando minhas habilidades em análise de dados para extrair insights valiosos e apoiar a tomada de decisões informadas. Utilizo Python, e suas Bibliotecas, também Docker para criar ambientes eficientes de análise.",
    },
    {
      id: 2,
      titulo: "Ciências da Computação",
      icone: MdSchool,
      descricao:
        "Atualmente cursando Faculdade de Ciências da Computação na Atitus Educação. Já no terceiro semestre, estou aprofundando meus conhecimentos em programação e desenvolvimento de software.",
    },
    {
      id: 3,
      titulo: "Engenharia de Dados",
      icone: MdWork,
      descricao:
        "Estou atuando na Compass UOL, onde estou aprendendo e aplicando práticas de ETL, modelagem de dados e otimização de pipelines. Experiência com Python, Jupyter Notebooks e ambientes de nuvem.",
    },
  ],

  tecnologias: [
    {
      id: 1,
      nome: "Python",
      icone: SiPython,
    },
    {
      id: 14,
      nome: "Docker",
      icone: SiDocker,
    },
    {
      id: 2,
      nome: "MySQL",
      icone: SiMysql,
    },
    {
      id: 3,
      nome: "React",
      icone: SiReact,
    },
    {
      id: 15,
      nome: "Jupyter",
      icone: SiJupyter,
    },
    {
      id: 16,
      nome: "Anaconda",
      icone: SiAnaconda,
    },
    {
      id: 4,
      nome: "Figma",
      icone: SiFigma,
    },
    {
      id: 5,
      nome: "JavaScript",
      icone: SiJavascript,
    },
    {
      id: 6,
      nome: "Java",
      icone: FaJava,
    },
    {
      id: 7,
      nome: "HTML",
      icone: SiHtml5,
    },
    {
      id: 8,
      nome: "CSS",
      icone: SiCss3,
    },
    {
      id: 9,
      nome: "AWS",
      icone: FaAws,
    },
    {
      id: 10,
      nome: "Git",
      icone: SiGit,
    },
    {
      id: 11,
      nome: "Pandas",
      icone: SiPandas,
    },
    {
      id: 12,
      nome: "Numpy",
      icone: SiNumpy,
    },
    {
      id: 13,
      nome: "Postman",
      icone: SiPostman,
    },
  ],

  futurasIdeias: [
    {
      id: 1,
      icone: MdAdd,
    },
    {
      id: 2,
      icone: MdAdd,
    },
  ],
};

export default SobreMimData;
