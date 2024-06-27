import styled from "styled-components";
import Header from "../components/header";
import Section from "../components/section";

import Projects from "../components/projects";
import { AboutMe } from "../components/AboutMe";
import Skills from "../components/skills";
export default function Home() {
  return (
    <Container>
      <Header />
      <Section />
      <AboutMe />
      <Projects />
      <Skills/>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  margin: 0;
  padding: 0;
  overflow: hidden; /* Para garantir que o GIF ocupe todo o espaço da página */

  background-size: 100%; /* Para cobrir todo o espaço disponível */
  background-attachment: fixed; /* Para garantir que o GIF permaneça no lugar enquanto a página é rolada */
  display: flex;
  flex-direction: column;
`;
