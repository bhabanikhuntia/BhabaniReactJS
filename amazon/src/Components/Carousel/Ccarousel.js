import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Assets/silder1.JPG";
import slider2 from "../../Assets/slider2.JPG";
import slider3 from "../../Assets/slider3.JPG";
import slider4 from "../../Assets/slider4.JPG";
import "./Ccarousel.css";

export default function Ccarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slider4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
