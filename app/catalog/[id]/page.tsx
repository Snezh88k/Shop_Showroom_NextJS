import React from "react";
import SliderInCard from "../../../components/slider_in_card/SliderInCard";

import styles from "./page.module.scss";
import Button from "@/components/button/Button";

import ShoppingBag from "../../../public/menu_icon/shopping_bag";
import HeartsIcon from "../../../public/menu_icon/hearts";
import Size from "@/components/size/Size";

import dataTest from "../../TestPropducts/products.json";
import Image from "next/image";
import SizeTable from "@/components/size_table/SizeTable";
import Compound from "@/components/compound/Compound";

// interface DataTest {
//   id: string;
//   name: string;
//   price: number;
//   sale: boolean;
//   compound: string;
//   size: {
//     rus: number[];
//     int: string[];
//   };
//   images: {
//     main: string;
//     other: string[];
//   };
// }

interface ProductProps {
  params: {
    id: string;
  };
}
export default function page({ params }: ProductProps) {
  console.log(dataTest[0].images.main);
  return (
    <div className={styles.wrapper}>
      {/* {params.id} */}
      {/* <Image src={dataTest[0].images.main} alt="" width={300} height={300} /> */}
      <SliderInCard />
      <div className={styles.desription}>
        <h1>Куртка "Бомбер"</h1>
        <div className={styles.price}>
          <span>2 000 ₽</span>
        </div>
        <span className={styles.portraiture}>
          Утепленная куртка выполнена из водоотталкивающего текстиля с
          искусственным наполнителем. Модель прямого кроя.
        </span>
        <div className={styles.handmade}>
          <span></span>
          <span></span>
        </div>
        <Compound compound={dataTest[0].compound} />
        <SizeTable sizes={dataTest[0].size} className={styles.sizes_table} />

        <div className={styles.buttons}>
          <Button
            text="Добавить в корзину"
            children={<ShoppingBag />}
            className={styles.buttonAddToCart}
          />
          <Button
            text="Добавить в избранное"
            children={<HeartsIcon />}
            className={styles.buttonAddToFavorite}
          />
        </div>
      </div>
    </div>
  );
}
