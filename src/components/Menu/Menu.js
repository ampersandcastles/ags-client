import React from "react";
import { Container } from "react-bootstrap";
import Center from "react-center";
import "./Menu.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Images from "../../assets/bread/index.js";

const Menu = (props) => {
  return (
    <Center>
      <Container id="items">
        <Card id="card">
          <CardImg top src={Images.bread1} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h2">Toast Sandwich</CardTitle>
            <CardSubtitle tag="h4" className="mb-1 text-muted">
              Absolutely disgusting
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card id="card">
          <CardImg top src={Images.bread2} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h2">Toast Sandwich</CardTitle>
            <CardSubtitle tag="h4" className="mb-1 text-muted">
              Absolutely disgusting
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card id="card">
          <CardImg top src={Images.bread3} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h2">Toast Sandwich</CardTitle>
            <CardSubtitle tag="h4" className="mb-1 text-muted">
              Absolutely disgusting
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card id="card">
          <CardImg top src={Images.bread4} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h2">Toast Sandwich</CardTitle>
            <CardSubtitle tag="h4" className="mb-1 text-muted">
              Absolutely disgusting
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
};

export default Menu;

// Why does code behave the way it does when all 4 elements are the same?
