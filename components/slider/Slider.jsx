"use client";

import Slider from "react-slick";
import clsx from "clsx";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "./Slider.scss";
import CardProduct from "../card_product/CardProduct";

export default function SimpleSlider({ title, className = "" }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    className: "slider_new",
    centerPadding: -30,
    centerMode: true,
  };

  return (
    <div className={clsx("wrapper", className)}>
      <h4>{title}</h4>
      <Slider {...settings}>
        <CardProduct
          src={"/first_block/Rectangle2.jpg"}
          height={350}
          alt="Карточка"
          price={1652}
          category="брюки"
        />
        <CardProduct
          src={"/first_block/Rectangle2.jpg"}
          height={350}
          alt="Карточка"
          price={1652}
          category="брюки"
        />
        <CardProduct
          src={"/first_block/Rectangle2.jpg"}
          height={350}
          alt="Карточка"
          price={1652}
          category="брюки"
        />
        <CardProduct
          src={"/first_block/Rectangle2.jpg"}
          height={350}
          alt="Карточка"
          price={122652}
          category="брюки"
        />
        <CardProduct
          src={"/first_block/Rectangle2.jpg"}
          height={350}
          alt="Карточка"
          price={11652}
          category="джинсы"
        />
      </Slider>
    </div>
  );
}
