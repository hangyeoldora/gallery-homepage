import React from "react";
import { Carousel } from "react-bootstrap";
const Slide = () => {
  return (
    <Carousel className="main-slide-wrap" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/banner/slide1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Banner</h3>
          <p>전시 기간 : 22.05.06 - 22.05.31</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/banner/slide2.jpg"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>전시 기간 : 22.05.06 - 22.05.31</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/banner/slide3.jpg"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>전시 기간 : 22.05.06 - 22.05.31</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
