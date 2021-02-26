import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  font-family: "rubik";
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  &:after {
    content: "";
    display: block;
    width: 45%;
    margin: 0 auto;
    padding-top: 0.35em;
    border-bottom: 3px solid #ff4a1c;
  }
  @media (max-width: 675px) {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const SubHeader = styled.h1`
  font-family: "rubik";
  font-size: 2.2rem;
  font-weight: 400;
  color: #fff;
  padding: 2rem;
  @media (max-width: 675px) {
    font-size: 1.65rem;
    text-align: center;
    padding: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.3rem;
    text-align: center;
    width: 320px;
    padding: 2rem;
  }
`;

const Description = styled.div`
  display: flex;
  @media (max-width: 656px) {
    flex-direction: column;
  }
`;

const SubDescription = styled.div`
  display: flex;
  flex: 1;
  max-width: 25em;
  font-size: 1.5rem;
  color: #fff;
  font-family: "Noto Serif", san-serif;
  padding: 2rem;
  @media (max-width: 675px) {
    font-size: 1.65rem;
    padding: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 1rem;
    width: 320px;
  }
`;

export default function About() {
  return (
    <div id="about">
      <Container>
        <Header>ABOUT</Header>
        <SubHeader>
          Self-motivated, Industrious, Critical Thinker, Problem Solver.
        </SubHeader>

        <Description>
          <SubDescription>
            I am a front-end Developer, residing in Canada. Currently I am doing
            an internship in one of the startup company of Toronto - Omadatek.
            In Omadatek, I mostly work with React JS along with styling
            frameworks such as Bootstrap, Material-UI. For the backend, I work
            with firebase and Nodejs/MongoDB.
          </SubDescription>

          <SubDescription>
            I completed my Post-Graduate in Information Technology Solutions
            from Humber College in 2020, August. And since October, I am
            associated with Omadatek.
          </SubDescription>
        </Description>
      </Container>
    </div>
  );
}
