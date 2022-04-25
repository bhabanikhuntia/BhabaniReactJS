import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Design.css";
import figment from "../../Assets/figment.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Design() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="one">
            <div className="five">
              Email :<br /> xyzzzzzz@outlook.com <br />
              Phone :<br />
              +917008585xxx <br /> Find me On <br />
              <a
                href="https://www.youtube.com/c/jamesqquick"
                className="youtube social"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.twitter.com/jamesqquick"
                className="twitter social"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/learnbuildteach"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="two">
            <div className="six">
              <p className="seven">
                Santush <br />
                Deb
              </p>
              Creative director - saint studios
              <br /> I'm santusg deb, a huge HTML lover.
              <br />
              <Button variant="primary" size="lg" disabled>
                Portfolio
              </Button>{" "}
              <Button variant="primary" size="lg" disabled>
                Resume
              </Button>{" "}
            </div>
          </div>
          <div className="three">
            <img src={figment} alt="figment" className="four"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
