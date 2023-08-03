"use client";
import Link from "next/link";
import { fillFavoriteStore } from "@/redux/slices/favoritesSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "@/components/card_product/CardProduct";

import styles from "./page.module.scss";

export default function page() {
  const dispatch = useDispatch();

  useEffect(() => {
    const FavotitesLocalStorage = JSON.parse(
      localStorage.getItem("favorite") || "[]"
    );
    dispatch(fillFavoriteStore(FavotitesLocalStorage));
  }, []);

  const favorites = useSelector((state: any) => state.favorites.items);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  return (
    <div className={styles.wrapper}>
      <h1>Избранное</h1>
      <div className={styles.catalog_wraper}>
        {favorites.map((product: any, index: number) => {
          return (
            <Link href={`${product.url}`} key={product?.id}>
              <CardProduct
                id={product?.id}
                src={product?.image}
                alt="Карточка"
                price={product?.price}
                category={product?.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
