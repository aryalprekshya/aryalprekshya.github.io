import React from "react";
import styled from "styled-components";
import { Row, Col, CardFooter, Card, CardBody } from "reactstrap";

import notellu from "../img/projectLogo/notellu.png";
import restro from "../img/projectLogo/restro.png";
import Rlogo from "../img/projectLogo/Rlogo.png";
import resturantLogo from "../img/projectLogo/restaurant_logo.png";

const projectList = [
  {
    imgAlt: "Notellu",
    imgSrc: notellu,
    href: "https://note-mi.herokuapp.com/",
  },
  {
    imgAlt: "NPLCafe",
    imgSrc: restro,
    href:
      "https://5f4b8579302549c7b5748956--sleepy-visvesvaraya-f4020f.netlify.app/",
  },
  {
    imgAlt: "Restro-Manger",
    imgSrc: Rlogo,
    href: "https://github.com/sajitkhadka/Restaurant_Management_Android_NodeJs",
  },
  {
    imgAlt: "Food2Go",
    imgSrc: resturantLogo,
    href: "https://github.com/aryalprekshya/FoodToGo",
  },
];

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
`;

export default function RenderProject() {
  return (
    <>
      {projectList.map((project) => {
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
                <a href={project.href}>
                  <Image
                    alt={project.imgAlt}
                    src={project.imgSrc}
                    onClick={project.href}
                  />
                </a>
              </CardBody>
              <CardFooter>{project.imgAlt}</CardFooter>
            </Card>
          </Col>
        );
      })}
    </>
  );
}
