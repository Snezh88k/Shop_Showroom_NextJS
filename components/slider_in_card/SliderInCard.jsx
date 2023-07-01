"use client";

import React, { useState } from "react";
import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "./SliderInCard.scss";
import Image from "next/image";

const images = [
  "/first_block/Rectangle2.jpg",
  "/first_block/Rectangle2.jpg",
  "/first_block/Rectangle2.jpg",
  "/first_block/Rectangle2.jpg",
  "/first_block/Rectangle2.jpg",
  "/first_block/Rectangle2.jpg",
];

export default function SliderInCard() {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <div>
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>

      <Slider
        asNavFor={slider2}
        ref={(slider) => setSlider1(slider)}
        className="product_card__main_slider"
        fade={true}
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
      <h4>Second Slider</h4>
      <Slider
        asNavFor={slider1}
        ref={(slider) => setSlider2(slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        className="product_card__secondary_slider"
        centerPadding={0}
        arrows={false}
      >
        {images.map((image) => (
          <div>
            <Image
              src={image}
              alt={image}
              width={120}
              height={140}
              className="product_card__secondary_slider__image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
