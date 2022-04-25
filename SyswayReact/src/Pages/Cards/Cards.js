import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./Cards.css";
import {
  BsFillCheckCircleFill,
  BsHeart,
  BsFileTextFill,
  BsEyeFill,
} from "react-icons/bs";

export default function Cards(props) {
  return (
    <Container>
      <div style={{ float: "left", marginLeft: "2rem" }}>
        <Card style={{ width: "18rem", marginBottom: "1rem" }}>
          <div>
            <BsFillCheckCircleFill style={{ color: "green" }} />
            <BsHeart style={{ color: "red", float: "right" }} />
          </div>
          <Card.Img variant="top" src={props.url} alt="flag" />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              {props.header}
            </Card.Title>
            <Card.Text>{props.mail}</Card.Text>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Button variant="primary" size="sm">
                <BsFileTextFill /> Assign
              </Button>
              <Button
                variant="primary"
                size="sm"
                style={{ marginLeft: "0.5rem" }}
              >
                <BsEyeFill /> View
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
