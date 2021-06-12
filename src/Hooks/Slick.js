import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Anhlogo0 from "../img/Carousel/img-icon0.png";
import Anhlogo1 from "../img/Carousel/img-icon1.png";
import Anhlogo2 from "../img/Carousel/img-icon2.png";
import Anhlogo3 from "../img/Carousel/img-icon3.png";
import Anhlogo4 from "../img/Carousel/img-icon4.png";
import Anhlogo5 from "../img/Carousel/img-icon5.png";
import BackgroundIcon from "../img/Carousel/s_brand_bg.jpg";
import "../Styles/Home.css";

export default function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div style={{backgroundImage: `url(${BackgroundIcon})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <Slider {...settings}>
        <div className="img-slick">
          <img src={Anhlogo0} alt="Anh logo 0" />
        </div>
        <div className="img-slick">
          <img src={Anhlogo1} alt="Anh logo 0" />
        </div>
        <div className="img-slick">
          <img src={Anhlogo2} alt="Anh logo 0" />
        </div>
        <div className="img-slick">
          <img src={Anhlogo3} alt="Anh logo 0" />
        </div>
        <div className="img-slick">
          <img src={Anhlogo4} alt="Anh logo 0" />
        </div>
        <div className="img-slick">
          <img src={Anhlogo5} alt="Anh logo 0" />
        </div>
      </Slider>
    </div>
  );
}
