import React from "react";
import { Carousel } from "react-bootstrap";
const Slide = () => {
  return (
    <Carousel className="main-slide-wrap" fade={true} interval={4000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/banner/slide4.png"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>김정운 개인전</h3>
          <p>전시 기간 : 20.06.30 - 20.07.31</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/banner/slide5.jpg"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Undecided...Watching</h3>
          <p>전시 기간 : 20.12.28 - 21.01.28</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/banner/slide6.png"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>좀비 것들</h3>
          <p>전시 기간 : 20.05.08 - 20.06.01</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
