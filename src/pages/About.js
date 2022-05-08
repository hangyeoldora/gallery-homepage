import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="about-wrap">
      <div className="about-img-wrap">
        <img
          className="about-main-img"
          src={process.env.PUBLIC_URL + "/images/about/about1.jpg"}
        />
        <p>523Kunstdoc 전경</p>
      </div>
      <div className="about-info-wrap">
        <p>
            &nbsp;&nbsp;쿤스트독, KunstDoc은 2006년 설립된 실험적 대안공간의 성격을 표방하는 전시공간입니다. 짧은 시간 동안 괄목할만한 전시 및 활동으로 단숨에 국내외의 관심을 끈 쿤스트독은 개관전 '감각 感覺의 층위 層位'에서 시작하여 공공 미술 프로젝트인 컨테이너 박스 전시 및 국제 창작 스튜디오 '예술 현장 통의동-보안여관' 등의 활동으로 한국 미술의 새로운 대안을 찾고자 하는 시도를 통해 현대미술의 다양한 요소를 비판적으로 수용하고 진지한 대안과 나름의 역할을 실현하기 위한 공간으로 오랫동안 예술가들의 아지트 역할을 해왔습니다.
        </p>
        <br />
        <p>
            &nbsp;&nbsp;2019년 12월 부산 작가들의 새로운 전시공간의 역할과 국내 미술시장이 처해있는 문제점의 해법을 제시하기 위해 쿤스트독은 (주)라텍의 523갤러리와의 협약으로 523쿤스트독으로 재탄생하였습니다. 앞으로 부산지역 청년작가들의 예술 터 攄가 될 것이며, 갤러리의 역할을 넘어서 '지금, 여기'에 일어나는 현대미술의 담론을 확장할 수 있는 새로운 형태의 복합 문화 예술 공간이 되기를 희망합니다.
        </p>
      </div>
      <div className="about-slide-wrap">
        <Carousel className="about-slider"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          swipeable={false}
          draggable={false}
          arrows={false}
          customTransition="all 1s"
          transitionDuration={1000}
          centerMode={true}
          containerClass="carousel-container"
        >
          <div className="about-slide-content">
              <img src={process.env.PUBLIC_URL+"/images/about/about-slide1.jpg"} />
          </div>
          <div className="about-slide-content">
              <img src={process.env.PUBLIC_URL+"/images/about/about-slide2.jpg"} />
          </div>
          <div className="about-slide-content">
              <img src={process.env.PUBLIC_URL+"/images/about/about-slide3.jpg"} />
          </div>
          <div className="about-slide-content">
              <img src={process.env.PUBLIC_URL+"/images/about/about-slide4.jpg"} />
          </div>
          <div className="about-slide-content">
              <img src={process.env.PUBLIC_URL+"/images/about/about-slide5.jpg"} />
          </div>
          <div className="about-slide-content">
              <img src={process.env.PUBLIC_URL+"/images/about/about-slide6.jpg"} />
          </div>
          <div className="about-slide-content">
              <img src={process.env.PUBLIC_URL+"/images/about/about-slide7.jpg"} />
          </div>
        </Carousel>
      </div>
      <div className="about-association">
        <img src={process.env.PUBLIC_URL + "/images/logo/kunstdoc_logo.png"} />
        <img src={process.env.PUBLIC_URL + "/images/logo/523_logo_red.png"} />
      </div>
    </div>
  );
};

export default About;
