"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SliderInCard from "../../../../../components/slider_in_card/SliderInCard";

import styles from "./page.module.scss";
import Button from "@/components/button/Button";

import ShoppingBag from "../../../../../public/menu_icon/shopping_bag";
import HeartsIcon from "../../../../../public/menu_icon/hearts";

import dataTest from "../../../../TestPropducts/products.json";

import SizeTable from "@/components/size_table/SizeTable";
import Compound from "@/components/compound/Compound";
import { addItem } from "@/redux/slices/cartSlice";
import { addFavorite, removeFavorite } from "@/redux/slices/favoritesSlice";
import clsx from "clsx";
import { useTranslation } from "@/app/i18n/client";

interface ProductProps {
  params: {
    id: string;
    lng: string;
  };
}

const products = dataTest as {
  id: string;
  langs?: Record<
    string,
    {
      name: string;
      description: string;
      compound: Record<string, string | undefined>[];
    }
  >;
  article: string;
  category: string;
  price: number;
  sale: number;
  size: any;
  images: {
    main: string;
    other: string[];
  };
}[];
export default function page({ params }: ProductProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites.items);

  const [isFavorites, setIsFavorites] = useState(false);

  useEffect(() => {
    if (favorites.find((product: any) => product.id === params.id)) {
      setIsFavorites(true);
    } else {
      setIsFavorites(false);
    }
  }, [favorites]);

  const lng = params.lng;
  const id = params.id;
  const { t } = useTranslation(lng, "favorites-page");

  const [isSize, setSize] = useState<string | null>();
  const [sizeSelected, setSizeSelected] = useState(false);
  const [successNotification, setSuccessNotification] = useState(false);

  const product = products.find((goods) => {
    return goods.id === id;
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
      id: id,
      name: product?.langs?.[lng].name,
      size: isSize,
      price: product?.sale ? product?.sale : product?.price,
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
      id: id,
    };

    if (isFavorites) dispatch(removeFavorite(order));
    else dispatch(addFavorite(order));
  };

  const changeSize = (size?: string | null) => {
    setSize(size);
  };

  return (
    <div>
      {product ? (
        <div className={styles.wrapper}>
          <SliderInCard images={product.images.other} />
          <div className={styles.desription}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 className={styles.name}>{product.langs?.[lng].name}</h1>
              <span className={styles.price}>
                {product.sale ? product.sale : product.price} ₾
              </span>
            </div>

            <div className={styles.portraiture}>
              {product?.langs?.[lng].description}
            </div>
            <div className={styles.handmade}>
              <span></span>
              <span></span>
            </div>
            <Compound compound={product.langs?.[lng].compound} />

            <SizeTable
              sizes={product?.size}
              onClick={changeSize}
              sizeSelected={sizeSelected ? true : false}
              className={styles.size_table}
              t={t}
              lng={lng}
            />

            <div className={styles.buttons}>
              <Button
                text={t("add_cart")}
                children={<ShoppingBag />}
                className={clsx(
                  styles.buttonAddToCart,
                  successNotification ? styles.successfulAddition : ""
                )}
                onClick={() => addProductCart()}
              />

              <Button
                text={isFavorites ? t("delete_favorites") : t("add_favorites")}
                children={<HeartsIcon />}
                className={styles.buttonAddToFavorite}
                onClick={() => addInFavorite()}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.no_found}>
          <h1 className={styles.no_found_title}>{"Товар не найден :("}</h1>
        </div>
      )}
    </div>
  );
}
