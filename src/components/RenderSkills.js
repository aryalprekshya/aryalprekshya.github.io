import React from "react";
import styled from "styled-components";
import { Row, Col, CardFooter, Card, CardBody } from "reactstrap";

import ReactLogo from "../img/skillsLogo/react.svg";
import Js from "../img/skillsLogo/js.svg";
import firebase from "../img/skillsLogo/firebase1.svg";
import Html from "../img/skillsLogo/html.svg";
import Css from "../img/skillsLogo/css.svg";

import Mysql from "../img/skillsLogo/mysql.svg";
import mongo from "../img/skillsLogo/mongodb.svg";
import bootstrap from "../img/skillsLogo/bootstrap.svg";

const skillList = [
  {
    imgAlt: "REACT",
    imgSrc: ReactLogo,
  },
  {
    imgAlt: "JS",
    imgSrc: Js,
  },
  {
    imgAlt: "HTML",
    imgSrc: Html,
  },
  {
    imgAlt: "CSS",
    imgSrc: Css,
  },
  {
    imgAlt: "Bootstrap",
    imgSrc: bootstrap,
  },
  {
    imgAlt: "MySQL",
    imgSrc: Mysql,
  },
  {
    imgAlt: "Mongo",
    imgSrc: mongo,
  },
  // {
  //   imgAlt: "Firebase",
  //   imgSrc: firebase,
  // },
];

export const Image = styled.img`
  width: 400;
  height: 200;
  object-fit: cover;
  cursor: pointer;
`;

export default function renderSkills() {
  return (
    <>
      {skillList.map((skill) => {
        return (
          <Col lg="3" md="6" sm="12" style={{ marginBottom: "1rem" }}>
            <Card
              style={{
                background: "#343a40",
                color: "white",
                textAlign: "center",
              }}
            >
              <CardBody>
                <Image alt={skill.imgAlt} src={skill.imgSrc} />
              </CardBody>
              <CardFooter>{skill.imgAlt}</CardFooter>
            </Card>
          </Col>
        );
      })}
    </>
  );
}
