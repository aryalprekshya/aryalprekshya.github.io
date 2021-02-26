import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Skill from "./Skill";
import Project from "./Projects";

export const Container = styled.div`
  width: 100%;
  background: #333;
  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
  @media screen and (max-width: 500px) {
    width: 100%;

    padding: 0px;
    overflow-x: hidden;
  }
`;

function Home() {
  return (
    <div>
      <NavBar />
      <Container>
        <Dashboard />
        <About />
        <Skill />
        <Project />
        <Contact />
      </Container>
    </div>
  );
}

export default Home;
