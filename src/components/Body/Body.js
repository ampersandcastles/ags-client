import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Panera from "../../assets/panera.jpg";
import "./Body.css";
import Center from "react-center";
import { Button } from "@material-ui/core";

const Body = (props) => {
  // stuff here

  return (
    <Jumbotron fluid>
      <Container>
        <Center>
          <img alt="lol" src={Panera} id="header"></img>
        </Center>
      </Container>
      <Center>
        <Button size="large" variant="contained">
          View Menu
        </Button>
      </Center>
    </Jumbotron>
  );
};
export default Body;
