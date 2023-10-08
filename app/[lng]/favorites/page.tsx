"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "@/components/card_product/CardProduct";
import dataTest from "../../TestPropducts/products.json";
import styles from "./page.module.scss";
import { useTranslation } from "@/app/i18n/client";
import { DataType } from "@/types/products";

interface Params {
  params: {
    lng: string;
  };
}

const products = dataTest as DataType[];

export const metadata = {
  title: "Избранное",
  description: "Товары добавленные в избранное",
};

export default function page({ params: { lng } }: Params) {
  const { t } = useTranslation(lng, "favorites-page");

  const favorites = useSelector((state: any) => state.favorites.items);

  return (
    <div className={styles.wrapper}>
      <h1>{t("title")}</h1>
      <div className={styles.catalog_wraper}>
        {favorites.map((product: any) =>
          products.map((productCatalog) => {
            if (product.id === productCatalog.id) {
              return (
                <Link
                  href={`/${lng}/catalog/${productCatalog.category}/${productCatalog.id}`}
                  key={productCatalog.id}
                >
                  <CardProduct
                    id={productCatalog.id}
                    src={productCatalog.images.main}
                    alt="Карточка"
                    price={productCatalog.price}
                    category={productCatalog.langs?.[lng]?.name}
                    lng={lng}
                    salePrice={productCatalog.sale}
                    t={t}
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
