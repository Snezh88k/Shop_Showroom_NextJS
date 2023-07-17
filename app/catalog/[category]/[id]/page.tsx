"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SliderInCard from "../../../../components/slider_in_card/SliderInCard";

import styles from "./page.module.scss";
import Button from "@/components/button/Button";

import ShoppingBag from "../../../../public/menu_icon/shopping_bag";
import HeartsIcon from "../../../../public/menu_icon/hearts";

import dataTest from "../../../TestPropducts/products.json";

import SizeTable from "@/components/size_table/SizeTable";
import Compound from "@/components/compound/Compound";
import { addCounInCart } from "@/redux/slices/cartSlice";

interface ProductProps {
  params: {
    id: string;
  };
}

export default function page({ params }: ProductProps) {
  const dispatch = useDispatch();

  const [isSize, setSize] = useState<number>();
  const product = dataTest.find((product) => {
    return product.id === params.id;
  });

  let warningSize;

  const addProductCart = () => {
    if (!isSize && isSize !== 0) {
      console.log("Выберите размер");
      warningSize = <div>Выберите размер</div>;
      return;
    }

    const cart = localStorage.getItem("cart");

    const order = {
      id: params.id,
      size: isSize,
    };

    if (cart) {
      if (cart.includes(`{"id":"${params.id}","size":${isSize}}`)) {
        return;
      }
      const newCart = cart + JSON.stringify(order);
      localStorage.setItem("cart", `${newCart} `);
    } else {
      localStorage.setItem("cart", `${JSON.stringify(order)} `);
    }

    dispatch(addCounInCart());
  };

  const changeSize = (size?: number) => {
    setSize(size);
  };

  return (
    <>
      {product ? (
        <div className={styles.wrapper}>
          <SliderInCard images={product?.images.other} />
          <div className={styles.desription}>
            <h1 className={styles.name}>{product?.name}</h1>
            <div className={styles.price}>
              <span>{product?.price} ₾</span>
            </div>
            <div className={styles.portraiture}>{product?.description}</div>
            <div className={styles.handmade}>
              <span></span>
              <span></span>
            </div>
            <Compound compound={dataTest[0].compound} />
            <SizeTable
              sizes={product?.size}
              className={styles.sizes_table}
              onClick={changeSize}
            />
            {warningSize}

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
          </div>{" "}
        </div>
      ) : (
        <div className={styles.no_found}>
          <h1 className={styles.no_found_title}>{"Товар не найден :("}</h1>
        </div>
      )}
    </>
  );
}
