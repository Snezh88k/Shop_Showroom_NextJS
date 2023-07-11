"use client";

import React from "react";
import SliderInCard from "../../../../components/slider_in_card/SliderInCard";

import styles from "./page.module.scss";
import Button from "@/components/button/Button";

import ShoppingBag from "../../../../public/menu_icon/shopping_bag";
import HeartsIcon from "../../../../public/menu_icon/hearts";

import dataTest from "../../../TestPropducts/products.json";

import SizeTable from "@/components/size_table/SizeTable";
import Compound from "@/components/compound/Compound";
import Head from "next/head";

export const metadata = {
  title: "Одежда",
  description: "Одежда для вас и вашей семьи",
};
interface ProductProps {
  params: {
    id: string;
  };
}

interface DataTest {
  id: string;
}
export default function page({ params }: ProductProps) {
  const product = dataTest.find((product) => {
    return product.id === params.id;
  });

  let name = "Товар",
    price = 1111;
  if (product) {
    name = product.name;
    price = product.price;
  }

  const addProductCart = () => {
    localStorage.setItem(params.id, "1");
  };

  return (
    <div className={styles.wrapper}>
      <SliderInCard images={product?.images.other} />
      <div className={styles.desription}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.price}>
          <span>{price} ₽</span>
        </div>
        <div className={styles.portraiture}>
          Утепленная куртка выполнена из водоотталкивающего текстиля с
          искусственным наполнителем. Модель прямого кроя.
        </div>
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
            onClick={() => addProductCart()}
          />
          <Button
            text="Добавить в избранное"
            children={<HeartsIcon />}
            className={styles.buttonAddToFavorite}
            onClick={() => console.log("Покупка")}
          />
        </div>
      </div>
    </div>
  );
}