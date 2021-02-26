import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";

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

const Footer = styled.h5`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 8rem;
  font-size: 1rem;
`;

export default function Contact() {
  function getYear() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
  }
  return (
    <div id="contact">
      <Container>
        <Header>CONTACT</Header>
        <SubHeader>Want to get in touch?</SubHeader>
        <a
          href="mailto:prekshya1aryal@gmail.com"
          style={{ color: "white", cursor: "pointer" }}
        >
          <Description>
            <AiOutlineMail size={20} />
          </Description>
        </a>
        <Footer>Prekshya Aryal @{getYear()}</Footer>
      </Container>
    </div>
  );
}
