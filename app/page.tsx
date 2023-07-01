import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";
import SimpleSlider from "../components/slider/Slider";

import Rectangle1 from "../public/first_block/Rectangle1.png";
import arrowUpRight from "../public/icons/arrow-up-right.svg";

import SelectionCard from "@/components/card_selection/SelectionCard";
import ButtonLink from "@/components/button_link/ButtonLink";

import localFont from "next/font/local";
import CardCategory from "@/components/card_category/CardCategory";

const AngleciaProDisplay = localFont({
  src: [
    {
      path: "../fonts/AngleciaProDisplay-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/AngleciaProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Home() {
  const images = [
    {
      path: "/product/photo(1).jpg",
      category: "товары на акции",
      description: "до 50%",
    },
    {
      path: "/product/photo(2).jpg",
      category: "товары на акции",
      description: "до 50%",
    },
    {
      path: "/product/photo(3).jpg",
      category: "товары на акции",
      description: "до 50%",
    },
    {
      path: "/product/photo(4).jpg",
      category: "товары на акции",
      description: "до 50%",
    },
  ];

  return (
    <div>
      <section className={styles.first_block}>
        <div className={styles.this_month}>
          <Image src={Rectangle1} alt="Rectangle1" />
          <div className={styles.title}>
            <h1 className={AngleciaProDisplay.className}>
              #новинки Этого месяца
            </h1>
            <h3>более 150 новых моделей</h3>
          </div>
          <Image src={arrowUpRight} alt="" className={styles.arrowUpRight} />
        </div>
        <div className={styles.promo}>
          <div className={styles.discount}>
            <h2>
              скидка <span>-20% </span>на третью позицию
            </h2>
            <span>
              действует на любые позиции в заказе до <span>1 июня</span>
            </span>
            <ButtonLink
              link="#"
              text="в каталог"
              className={styles.catalog_button}
            />
          </div>
        </div>
        <div className={styles.collection_one}>
          <CardCategory
            photo={"/first_block/Rectangle 3.png"}
            alt="Карточка"
            description="#Cпорт"
            key={images[0].path}
          />
        </div>
        <div className={styles.collection_two}>
          <CardCategory
            photo={"/first_block/Rectangle 3.png"}
            alt="Карточка"
            description="#Лето"
            key={images[0].path}
          />
        </div>
      </section>
      <div className={styles.novelties}>
        <SimpleSlider title={"Новинки"} className={styles.slider_wrapper} />
      </div>
      <div className={styles.random_selection_block}>
        {images.map((image) => {
          return (
            <SelectionCard
              src={image.path}
              alt="Карточка"
              category="Товары на акции"
              description="до 50%"
              key={image.path}
            />
          );
        })}
      </div>
      <div className={styles.popular_block}>
        <SimpleSlider title={"Популярное"} className={styles.slider_wrapper} />
      </div>
    </div>
  );
}
