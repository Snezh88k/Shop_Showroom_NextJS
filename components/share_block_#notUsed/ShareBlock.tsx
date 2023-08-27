import React from "react";
import styles from "./ShareBlock.module.scss";
import Image from "next/image";
import localFont from "next/font/local";

// import Rectangle1 from "../../public/first_block/Rectangle1.png";
// import arrowUpRight from "../../public/icons/arrow-up-right.svg";

import ButtonLink from "../button_link/ButtonLink";
import CardCategory from "../card_category/CardCategory";

const AngleciaProDisplay = localFont({
  src: [
    {
      path: "../../fonts/AngleciaProDisplay-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/AngleciaProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function ShareBlock() {
  return (
    <section className={styles.first_block}>
      <div className={styles.this_month}>
        {/* <Image src={Rectangle1} alt="Rectangle1" /> */}
        <div className={styles.title}>
          <h1 className={AngleciaProDisplay.className}>
            #новинки Этого месяца
          </h1>
          <h3>более 150 новых моделей</h3>
        </div>
        {/* <Image src={arrowUpRight} alt="" className={styles.arrowUpRight} /> */}
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
        {/* <CardCategory
          photo={"/first_block/Rectangle 3.png"}
          alt="Карточка"
          description="#Cпорт"
          key={"123"}
        /> */}
      </div>
      <div className={styles.collection_two}>
        {/* <CardCategory
          photo={"/first_block/Rectangle 3.png"}
          alt="Карточка"
          description="#Лето"
          key={"321"}
        /> */}
      </div>
    </section>
  );
}
