import React from "react";
import styled from "styled-components";

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll suave para uma transição mais agradável
    });
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me-section");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ContainerHeader>
      <Logos>
        <LogoItem color1="#FD5428" color2="#ED8C6E">
          J
        </LogoItem>
        <LogoItem color1="#007DB9" color2="#139FE3">
          N
        </LogoItem>
        <LogoItem color1="#F99B2A" color2="#FFCB3E">
          JS
        </LogoItem>
      </Logos>
      <ButtonNavigation>
        <p onClick={scrollToTop}>Início</p>
        <p onClick={scrollToAboutMe}>Sobre mim</p>
        <p>Projetos</p>
        <p>Habilidades</p>
      </ButtonNavigation>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  width: 100%;
  background-color: rgba(107, 107, 107, 0.53);
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0.5px 0px #fffffffa;
  backdrop-filter: blur(10px); /* Aplicando desfoque */
  position: fixed;
  @media (max-width: 667px) {
    display: flex;
    justify-content: space-around;
  }
`;

const Logos = styled.div`
  display: flex;
`;

const LogoItem = styled.p`
  padding: 0.5em;
  border-radius: 50%;
  color: white;
  background: ${({ color1, color2 }) =>
    `linear-gradient(to right, ${color1} 50%, ${color2} 50%)`};
  font-size: 25px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Abel";
  margin-left: 5px;
  &:nth-child(2) {
    margin-top: 5px;
  }
  @media (max-width: 667px) {
    width: 4%;
    height: 5px;
    font-size: 20px;
  }
`;

const ButtonNavigation = styled.div`
  display: flex;

  text-align: center;
  p {
    color: white;
    width: 100px;
    cursor: pointer;
  }
  @media (max-width: 667px) {
    width: 65%;

    p {
      font-size: 13px;
    }
  }
`;
