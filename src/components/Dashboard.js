import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;

const Header = styled.h1`
  font-family: "rubik";
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
  @media (max-width: 675px) {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const SubHeader = styled.h1`
  font-family: "rubik";
  font-size: 2.2rem;
  font-weight: 400;
  color: #fff;
  margin-top: 0.3em;
  @media (max-width: 675px) {
    font-size: 1.65rem;
    text-align: center;
  }
  @media (max-width: 500px) {
    margin: 1rem 3.5rem;
  }
`;

/* cedar chest: #C75146, english lavender: #B38D97, bush: #E75A7C , indian red: #DB5461, illuminating Emerald: #4E937A, red orange color wheat: #FF4A1C, fireOpal: #EE6055*/
function Dashboard() {
  return (
    <div id="home">
      <Container>
        <Description>
          <Header>
            Hello, I'm{" "}
            <span style={{ color: "#E75A7C", fontWeight: "bold" }}>
              Prekshya Aryal
            </span>
          </Header>
          <SubHeader
            style={{
              fontFamily: "monospace",
            }}
          >
            I'm a{" "}
            <span
              style={{
                color: "#FF4A1C",
                fontWeight: "bold",
              }}
            >
              front-end
            </span>{" "}
            developer from{" "}
            <span
              style={{
                color: "#FF4A1C",
                fontWeight: "bold",
              }}
            >
              Toronto
            </span>
          </SubHeader>
        </Description>
      </Container>
    </div>
  );
}
export default Dashboard;
