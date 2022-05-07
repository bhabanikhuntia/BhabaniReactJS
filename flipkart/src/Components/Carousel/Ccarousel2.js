import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../Assets/img1.jpeg";
import img2 from "../../Assets/img2.jpeg";
import img3 from "../../Assets/img3.jpeg";

export default function Ccarousel2() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            height="363px"
          />
          {/* <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            height="363px"
          />
          {/* <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            height="363px"
          />
          {/* <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
