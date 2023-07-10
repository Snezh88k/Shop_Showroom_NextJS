"use client";

import React, { useState } from "react";
import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "./SliderInCard.scss";
import Image from "next/image";

const images = [
  "/product/photo(1).jpg",
  "/product/photo(2).jpg",
  "/product/photo(3).jpg",
  "/product/photo(4).jpg",
  "/product/photo(5).jpg",
  "/product/photo(6).jpg",
  "/product/photo(7).jpg",
];

export default function SliderInCard() {
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
        {images.map((image) => (
          <div>
            <Image
              src={image}
              alt={image}
              width={570}
              height={570}
              className="product_card__main_slider__image"
            />
          </div>
        ))}
      </Slider>

      <Slider
        asNavFor={slider1}
        ref={(slider) => setSlider2(slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        className="product_card__secondary_slider"
        centerMode={true}
        centerPadding={-10}
        arrows={false}
      >
        {images.map((image) => (
          <div className="product_card__secondary_slider__image_wrapper">
            <Image
              src={image}
              alt={image}
              width={100}
              height={140}
              className="product_card__secondary_slider__image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
