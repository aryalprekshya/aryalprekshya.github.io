import React from "react";
import styled from "styled-components";

const Header = styled.div`
  font-family: "DejaVu Sans Mono", monospace;
  font-size: 20px;
  letter-spacing: 6px;
  font-weight: bold;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  left: 0;
  right: 0;
  border-bottom: 0.5px solid white;
  background: black;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
    left: 0;
    margin-left: 0.1%;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: -webkit-sticky;
  right: 0;
  list-style: none;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Li = styled.li`
  display: inline-block;
  flex-basis: 150px;

  div {
    display: block;
    color: wheat;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    display: table;
    margin-left: auto;
    margin-right: auto;
    line-height: 2;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      flex-basis: 150px;
      justify-content: center;
      font-size: 20px;
      letter-spacing: 6px;
    }
    @media screen and (max-width: 1023px) {
      flex-basis: 150px;
      justify-content: center;
      font-size: 20px;
      letter-spacing: 6px;
    }
    @media screen and (max-width: 500px) {
      flex-basis: 1px;
      font-size: 11px;
      letter-spacing: 0.5px;
    }
  }
`;

function NavBar() {
  const scroll = (el_name) => {
    const element = document.getElementById(el_name);
    var headerOffset = 20;
    var elementPosition = element.offsetTop;

    window.scrollTo({
      top: elementPosition - 80,
      behavior: "smooth",
    });
  };
  return (
    <Header>
      <Ul>
        <Li>
          <div
            onClick={() => {
              scroll("home");
            }}
          >
            Home
          </div>
        </Li>
        <Li>
          <div
            onClick={() => {
              scroll("about");
            }}
          >
            About
          </div>
        </Li>
        <Li>
          <div
            onClick={() => {
              scroll("skills");
            }}
          >
            Skills
          </div>
        </Li>
        <Li>
          <div
            onClick={() => {
              scroll("projects");
            }}
          >
            Projects
          </div>
        </Li>

        <Li>
          <div
            onClick={() => {
              scroll("contact");
            }}
          >
            Contact
          </div>
        </Li>
      </Ul>
    </Header>
  );
}

export default NavBar;
