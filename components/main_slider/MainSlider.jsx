"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "./MainSlider.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image1 from "@/public/product/PantsJeans/23S01008_G_1.jpg";
import image2 from "@/public/product/SuitsSets/23S08006_P_1.jpg";
import image3 from "@/public/product/SuitsSets/23S35016_B_1.jpg";
import image4 from "@/public/product/TopsShirts/23S15002_P_2.jpg";
import image5 from "@/public/product/TopsShirts/23S24003_G_1.jpg";

export default function MainSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    fade: true,
  };
  return (
    <div className="main_slider__wrapper">
      <Slider {...settings} className="main_slider">
        <div>
          <Image src={image1} alt={"dasdas"} fill={true} quality={100} />
        </div>
        <div>
          <Image src={image2} alt={"dasdas"} fill={true} quality={100} />
        </div>
        <div>
          <Image src={image3} alt={"dasdas"} fill={true} quality={100} />
        </div>
        <div>
          <Image src={image4} alt={"dasdas"} fill={true} quality={100} />
        </div>
        <div>
          <Image src={image5} alt={"dasdas"} fill={true} quality={100} />
        </div>
      </Slider>
      <span className="main_slider__title">
        <i>#хиты</i> этого сезона
      </span>
    </div>
  );
}
