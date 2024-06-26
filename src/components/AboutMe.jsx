import styled from "styled-components"
import ImgRobo from "../assets/robo.png";
export function AboutMe(){
    return(
        <>
<Container  id="about-me-section">
<img className="robo" src={ImgRobo} alt="Imagem de Perfil" />
<MeDescription>

Sou um profissional apaixonado por tecnologia e desenvolvimento web, com expertise em React.js, JavaScript, CSS3, HTML5 e experiência em APIs com Axios. Crio interfaces dinâmicas e responsivas, desenvolvo funcionalidades interativas, aplico design responsivo e estruturo conteúdo de forma semântica e acessível. Tenho habilidade em Git e GitHub para versionamento e colaboração eficiente em projetos. Estou sempre buscando aprimorar minhas habilidades e acompanhar as últimas tendências do mercado. Comecei a estudar nessa área em 2022 por indicação de um amigo e me apaixonei pela programação.
</MeDescription>
</Container>
        </>
    )
}
const Container = styled.div`
background-color: #0E0E0E;
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
.robo {
    width: 20%; 
    border-radius: 100px;
    margin-right: 20px;
    animation: fadeIn 0.5s ease-in-out 0.5s forwards;
    opacity: 0; /* Inicialmente escondido */
  }
`

const MeDescription = styled.div`
width: 50%;
font-size: 25px;
color: white;
@media (max-width: 667px) {

    width: 70%;
    font-size: 18px;
  }
`