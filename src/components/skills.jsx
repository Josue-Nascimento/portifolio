import React, { useState } from "react";
import styled from "styled-components";
import Html5 from "../assets/html5.png";
import Css3 from "../assets/css3.png";
import LinkedinLogo from "../assets/logoLinkedin.png";
import Whats from "../assets/whatsaap.png"
import ReactLogo from "../assets/react.png"; // Renomeado para evitar conflito com o nome do React
import Git from "../assets/git.png";

const skills = [
  {
    src: Html5,
    alt: "HTML5",
    text: "HTML5 é a linguagem de marcação usada para estruturar e apresentar conteúdo na web de forma semântica e acessível. Tenho experiência em HTML5, aplicando suas funcionalidades para criar estruturas claras e eficientes.",
  },
  {
    src: Css3,
    alt: "CSS3",
    text: "CSS3, ou Cascading Style Sheets nível 3, é uma linguagem usada para estilizar elementos HTML na web. Ela permite criar layouts atraentes e responsivos com animações, transições, sombras, e gradientes. Estudo CSS3 há um ano e meio, desenvolvendo habilidades para criar interfaces dinâmicas e adaptáveis a diferentes dispositivos.",
  },
  {
    src: ReactLogo,
    alt: "React",
    text: "React é uma biblioteca JavaScript usada para criar interfaces de usuário interativas e eficientes com componentes reutilizáveis. Estudo React desde 2022, desenvolvendo habilidades para criar interfaces dinâmicas e responsivas.",
  },
  {
    src: Git,
    alt: "Git",
    text: "Git é um sistema de controle de versão para rastrear mudanças no código. GitHub é uma plataforma para colaboração em projetos baseados em Git. Tenho habilidade em Git e GitHub para versionamento e colaboração eficiente.",
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <ContainerSkills id="skills-section">
      <h1>Habilidades</h1>
      <AlltheInformation>
        <LogoSkills>
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              onMouseEnter={() => setHoveredSkill(skill.text)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img src={skill.src} alt={skill.alt} />
            </SkillItem>
          ))}
         
        </LogoSkills>
        <TextContainer>
          {hoveredSkill || "Passe o mouse sobre uma habilidade"}
        </TextContainer>
      </AlltheInformation>
      <ContactInformation>
        <p>Email: rnascimentojosue@gmail.com <br/>
        Feito por Josué Nascimento</p>
        <div>
          <a
            href="https://github.com/Josue-Nascimento?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img src={Git} alt="GitHub"/>
          </a>
          <a
            href="https://linkedin.com/in/josué-nascimentodev"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img src={LinkedinLogo} alt="LinkedIn"/>
          </a>
          <WhatsappLink
            href={`https://api.whatsapp.com/send?phone=12992189430&text=${encodeURIComponent("Olá, tudo bem? Encontrei seu portfólio online e fiquei interessado em saber mais sobre os seus serviços como Desenvolvedor Front-End. Podemos conversar?")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whats} alt="WhatsApp" />
          </WhatsappLink>
        </div>
      </ContactInformation>
    </ContainerSkills>
  );
};

const ContainerSkills = styled.div`
  background-color: #2b2c27;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Chakra Petch";

  h1 {
    color: white;
    font-size: 50px;
    font-weight: bolder;
  }
`;

const AlltheInformation = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const LogoSkills = styled.div`

  height: 300px;
  width: 300px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  margin-right: 20px;
  @media (max-width: 667px) {
   
        width: 100%;
        height: 50%;
          display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

const SkillItem = styled.div`
  width: 30%;
  height: 90px;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  transition: transform 0.3s, filter 0.3s;
  filter: grayscale(100%);
  @media (max-width: 667px) {
        width: 20%;
    }
  
  &:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    @media (max-width: 667px) {
        width: 200%;
        height: 60%;

    }
  }
`;

const TextContainer = styled.div`
  color: white;
  width: 100%;
  font-size: 16px;
  margin-left: 20px;
  max-width: 200px;
  @media (max-width: 667px) {
      font-size: 13px;

    }
`;

const ContactInformation = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
 
  
  p {
    color: white;
    @media (max-width: 667px) {
      font-size: 13px;
    }
  }

  img {
    background-color: aliceblue;
    width: 50px;
    border-radius: 10px;
    margin-right: 5px;
    @media (max-width: 667px) {
      width: 30px;

    }
  }
`;

const WhatsappLink = styled.a`
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    @media (max-width: 667px) {
      width: 30px;
      height: 30px;

    }
  }

  &:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
  }
`;

export default Skills;