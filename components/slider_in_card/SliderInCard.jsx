"use client";

import React, { useState } from "react";
import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "./SliderInCard.scss";
import Image from "next/image";

export default function SliderInCard({ images }) {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <div>
      <Slider
        asNavFor={slider2}
        ref={(slider) => setSlider1(slider)}
        className="product_card__main_slider"
        fade={true}
        arrows={true}
      >
        {images?.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={image}
              width={570}
              height={570}
              quality={100}
              className="product_card__main_slider__image"
            />
          </div>
        ))}
      </Slider>

      <Slider
        asNavFor={slider1}
        ref={(slider) => setSlider2(slider)}
        slidesToShow={images?.length}
        swipeToSlide={true}
        focusOnSelect={true}
        className="product_card__secondary_slider"
        centerMode={true}
        centerPadding={110}
        arrows={false}
        responsive={[
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              centerPadding: 35,
            },
          },
        ]}
      >
        {images?.map((image, index) => (
          <div
            className="product_card__secondary_slider__image_wrapper"
            key={index}
          >
            <Image
              src={image}
              alt={image}
              width={100}
              height={140}
              quality={100}
              className="product_card__secondary_slider__image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
