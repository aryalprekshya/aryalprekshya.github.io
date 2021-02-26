import React from "react";
import styled from "styled-components";
import RenderProject from "./RenderProject";
import { Row, Col } from "reactstrap";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
`;

const Header = styled.h1`
  font-family: "rubik";
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 45%;
    padding-top: 0.35em;
    border-bottom: 3px solid #ff4a1c;
  }
  @media (max-width: 675px) {
    font-size: 2rem;
    padding: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
    padding: 2rem;
  }
`;

const Description = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0rem;
  }
`;

export default function Project() {
  return (
    <div id="projects">
      <Container>
        <Header>PROJECTS</Header>

        <Description>
          <Row>
            <RenderProject />
          </Row>
        </Description>
      </Container>
    </div>
  );
}
