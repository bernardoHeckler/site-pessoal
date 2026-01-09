import { MdSchool, MdWork, MdAdd } from "react-icons/md";
import { SiPython, SiMysql, SiReact, SiFigma, SiJavascript, SiHtml5, SiCss3, SiGit, SiPostman, SiDocker, SiJupyter, SiAnaconda, SiPandas, SiNumpy } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaAws, FaJava } from "react-icons/fa";

const SobreMimData = {
  titulo: "Sobre Mim",
  descricao: "Meu nome é Bernardo Heckler e minha base foi construída na prática. Recentemente, fechei um ciclo intenso de estágio na Compass UOL como AWS Cloud Data Engineering, mas minha entrega foi além do pipeline: eu entendi que dados só têm valor quando as pessoas conseguem usá-los.",
  descricaoLonga: [
    "Minha motivação é simples: gosto de codar, buscar resultados e ver como os números validam o que funciona ou não em um negócio.",
    "O que entrego: Engenharia e Análise — domínio de Python, SQL e ETL, com experiência na criação de dashboards que transformam dados brutos em decisões.",
    "Cultura de Manutenção: desenvolvo código pensando no próximo desenvolvedor. Meus projetos acompanham vídeos de handover técnico e documentação de processos.",
    "Liderança e Agilidade: atuei como líder de squad em ambiente de sprints, facilitando dailies e a comunicação entre o time técnico e a gestão. Tenho um repositório público com todas as minhas entregas documentadas.",
    "Atualmente, busco novos desafios onde eu possa aplicar meu conhecimento em Docker, AWS e infraestrutura de dados para construir soluções robustas e escaláveis."
  ],

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
