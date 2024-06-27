import React, { useState } from "react";
import styled from "styled-components";
import lojaMks from "../assets/lojaMks.png";
import cineflex from "../assets/cineflex.png";
import ZapRecall from "../assets/zapRecall.png";

import SeeMore from "./projects/seeMoure";

const projects = [
  {
    name: "Loja MKS",
    image: lojaMks,
    link: "https://loja-mks-psi.vercel.app/",
  },
  {
    name: "Cineflex",
    image: cineflex,
    link: "https://cine-flex-rho.vercel.app/",
  },
  {
    name: "Zap Recall",
    image: ZapRecall,
    link: "https://zap-recall-teal.vercel.app/",
  },
];

export default function Projects() {
  const [seeMore, setSeeMore] = useState(false);

  const handleToggleCart = () => {
    setSeeMore(!seeMore);
  };

  return (
    <ContainerProjects id="projects-section">
      <h1>Projetos</h1>
      <ProjectsLinks>
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.name} />
            </a>
          </li>
        ))}
      </ProjectsLinks>
      <Button onClick={handleToggleCart}>
        {seeMore && (<SeeMore setSeeMore={seeMore} />)}
        <p>{seeMore ? "Ver menos ⇧" : "Ver mais ⇩"}</p>
      </Button>
    </ContainerProjects>
  );
}

const ContainerProjects = styled.div`
  background-color: #444444;
  width: 100%;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-size: 60px;
    font-family: "Chakra Petch";
    font-weight: bolder;
    margin-bottom: 30px;
    margin-top: 20px;
    @media (max-width: 667px) {
      font-size: 40px;
      margin-top: 50px;
    }
  }
`;

const ProjectsLinks = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  @media (max-width: 667px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    overflow: auto;
  }

  li {
    list-style: none;
    margin: 10px;
    transition: transform 0.3s;
  }

  img {
    width: 80%;
    height: 200px;
    border-radius: 10px;
    border: 3px solid #14111143;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 667px) {
      width: 80%;
      height: auto;
    }
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: white;
    font-size: 20px;
    font-family: "Chakra Petch";
    cursor: pointer;
  }
`;