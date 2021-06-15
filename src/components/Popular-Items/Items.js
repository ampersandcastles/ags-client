import React from "react";
import { Container } from "react-bootstrap";
import Center from "react-center";
import "./Items.css";
import toast from "../../assets/toast-sandwich.jpg";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Items = (props) => {
  return (
    <Center>
      <Container id="items">
        <Card id="card">
          <CardImg top src={toast} alt="Card image cap" />
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
          <CardImg top src={toast} alt="Card image cap" />
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
          <CardImg top src={toast} alt="Card image cap" />
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

export default Items;
