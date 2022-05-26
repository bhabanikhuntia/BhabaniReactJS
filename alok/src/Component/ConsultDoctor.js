import React, { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./ConsultDoctor.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function ConsultDoctor() {
  const [value, setValue] = useState();
  return (
    <Container className="cd2">
        <Row>
          <Col>
            <div className="cd1"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="cd3">Consult a Doctor</h4>
            <small className="cd4">Speciality</small>
            <br />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BsFillCheckCircleFill style={{ color: "#00b59f", height:"2.5em", width:"2.5em", paddingRight: "1rem"}} />{" "}
                 Gynaecology
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name for prescription"
              />
            </Form.Group>

            <small>Phone number</small>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
          </Col>
          <Col className="cd5">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tell us your symptom or health problems</Form.Label>
              <Form.Control as="textarea" rows={12} />
            </Form.Group>
            <Button variant="secondary" size="sm" disabled>
              Continue
            </Button>{" "}
          </Col>
        </Row>
    </Container>
  );
}
