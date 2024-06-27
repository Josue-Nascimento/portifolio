import styled, { keyframes } from "styled-components";
import imagePerfil from "../assets/imagePerfil.png";
import imagemBanner from "../assets/banner.png";

export default function Section() {
  return (
    <>
      <ContainerSection>
        <InformationSection>
          <h1 className="Presentation">
            Olá, eu sou <br /> <span>Josué Nascimento</span>
          </h1>
          <p className="typing-animation">Desenvolvedor Front-End</p>
          <a
            href="https://linkedin.com/in/josué-nascimentodev"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <ButtonLinkedin>Linkedin</ButtonLinkedin>
          </a>
        </InformationSection>
        <img className="fotoPerfil" src={imagePerfil} alt="Imagem de Perfil" />
      </ContainerSection>
    </>
  );
}

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 43%;
  }
`;

const blinkCursor = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
`;

const ContainerSection = styled.div`
  background-image: url(${imagemBanner});
  background-size: 100%;
  height: 695px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .fotoPerfil {
    width: 20%;
    border-radius: 100px;
    animation: fadeIn 0.5s ease-in-out 0.5s forwards;
    opacity: 0;
    @media (max-width: 667px) {
        width: 60%;
        height: 250px;
    }
  }
`;

const InformationSection = styled.div`
  width: 500px;
  height: 200px;

  .Presentation {
    font-weight: 700; 
    font-size: 30px;
    margin-bottom: 20px;
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out 0.5s forwards;
    @media (max-width: 667px) {
      font-size: 15px;
      width: 30%;
      margin-left: 30px;
    }

    span {
      font-size: 40px;
      @media (max-width: 667px) {  
        font-size: 30px;
      }
    }
  }

  p {
    width: 43%; 
    font-size: 20px;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid white;
    animation: ${typing} 2s steps(20, end) 0.5s, ${blinkCursor} 1s step-end infinite 0.5s;
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out 0.5s forwards, ${typing} 2s steps(20, end) 0.5s, ${blinkCursor} 1s step-end infinite 0.5s;
    @media (max-width: 667px) {
        font-size: 15px;
        width: 88%;
        margin-left: 30px;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .linkedin-link {
    text-decoration: none; /* Remove a decoração padrão do link */
    display: inline-flex; /* Garante que o botão tenha a largura apropriada */
  }
`;

const ButtonLinkedin = styled.div`
  background-color: #ffffff;
  color: black;
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 20px;
  margin-top: 15px;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 667px) {
    font-size: 20px;
    margin-left: 30px;
  }
`;