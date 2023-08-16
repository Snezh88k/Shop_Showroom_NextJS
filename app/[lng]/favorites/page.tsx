"use client";
import Link from "next/link";
import { fillFavoriteStore } from "@/redux/slices/favoritesSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "@/components/card_product/CardProduct";
import dataTest from "../../TestPropducts/products.json";

import styles from "./page.module.scss";

export default function page() {
  const favorites = useSelector((state: any) => state.favorites.items);

  return (
    <div className={styles.wrapper}>
      <h1>Избранное</h1>
      <div className={styles.catalog_wraper}>
        {favorites.map((product: any) =>
          dataTest.map((productCatalog) => {
            if (product.id === productCatalog.id) {
              return (
                <Link
                  href={`/catalog/${productCatalog.category}/${productCatalog.id}`}
                  key={productCatalog.id}
                >
                  <CardProduct
                    id={productCatalog.id}
                    src={productCatalog.images.main}
                    alt="Карточка"
                    price={productCatalog.price}
                    category={productCatalog.name}
                  />
                </Link>
              );
            }
            return;
          })
        )}
      </div>
    </div>
  );
}
