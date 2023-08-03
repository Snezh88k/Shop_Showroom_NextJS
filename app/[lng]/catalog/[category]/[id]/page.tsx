"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SliderInCard from "../../../../../components/slider_in_card/SliderInCard";

import styles from "./page.module.scss";
import Button from "@/components/button/Button";

import ShoppingBag from "../../../../../public/menu_icon/shopping_bag";
import HeartsIcon from "../../../../../public/menu_icon/hearts";

import dataTest from "../../../../TestPropducts/products.json";

import SizeTable from "@/components/size_table/SizeTable";
import Compound from "@/components/compound/Compound";
import { addItem } from "@/redux/slices/cartSlice";
import { addFavorite } from "@/redux/slices/favoritesSlice";

interface ProductProps {
  params: {
    id: string;
  };
}

export default function page({ params }: ProductProps) {
  const dispatch = useDispatch();

  const [isSize, setSize] = useState<string | null>();
  const [sizeSelected, setSizeSelected] = useState(false);
  const [successNotification, setSuccessNotification] = useState(false);

  const product = dataTest.find((product) => {
    return product.id === params.id;
  });

  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const addProductCart = () => {
    if (!isSize) {
      setSizeSelected(true);
      setTimeout(() => setSizeSelected(false), 2000);
      return;
    }

    const order = {
      id: params.id,
      name: product?.name,
      size: isSize,
      price: product?.price,
      image: product?.images.main,
      count: 1,
      url: currentUrl,
    };

    setSuccessNotification(true);
    setTimeout(() => setSuccessNotification(false), 3000);

    dispatch(addItem(order));
  };

  const addInFavorite = () => {
    const order = {
      id: params.id,
      name: product?.name,
      size: isSize,
      price: product?.price,
      image: product?.images.main,
      count: 1,
      url: currentUrl,
    };

    dispatch(addFavorite(order));
  };

  const changeSize = (size?: string | null) => {
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
              onClick={changeSize}
              sizeSelected={sizeSelected ? true : false}
              className={styles.size_table}
            />

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
                onClick={() => addInFavorite()}
              />
            </div>
          </div>
          <div
            className={styles.item_added}
            style={
              successNotification ? { display: "block" } : { display: "none" }
            }
          >
            Товар добавлен в корзину!
          </div>
        </div>
      ) : (
        <div className={styles.no_found}>
          <h1 className={styles.no_found_title}>{"Товар не найден :("}</h1>
        </div>
      )}
    </>
  );
}
