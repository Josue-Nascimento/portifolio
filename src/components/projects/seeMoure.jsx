import styled from "styled-components";

const moreProjects = [
  { name: "EM BREVE" },
  { name: "EM BREVE" },
  { name: "EM BREVE" },
];

export default function SeeMore({ seeMore, setSeeMore }) {
  return (
    <ContainerSeeMore>
      {moreProjects.map((project, index) => (
        <MoreProjects key={index}>
          <p>{project.name}</p>
        </MoreProjects>
      ))}
    </ContainerSeeMore>
  );
}

const ContainerSeeMore = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px; 
  /* Ajuste de espaçamento conforme necessário */
  
`;

const MoreProjects = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #c4c4c4;
  width: 30%;
  height: 200px;
  border-radius: 10px;
  margin: 0 10px; /* Espaçamento entre os itens */
  margin-bottom: 10px;
  @media (max-width: 667px) {
      width: 28%;
    height: 40px;
      overflow: auto;
      display: flex;
      flex-direction: column;
    }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #705756;
    width: 100%;
    height: 40px;
    color: white;
  }
`;