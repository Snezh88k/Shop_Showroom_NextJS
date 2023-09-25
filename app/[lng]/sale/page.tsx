import React from "react";
import styles from "./page.module.scss";

import dataTest from "../../TestPropducts/products.json";

import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { CardProductLan } from "@/components/card_product/client";

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
  selectorWeight: number;
}[];

export default async function page({ params }: any) {
  const { t } = await useTranslation(params.lng);
  const lng: string = params.lng;
  return (
    <div className={styles.wrapper}>
      {<h1 style={{ textTransform: "uppercase" }}>{t("sale")}</h1>}
      <div className={styles.products}>
        {products
          .sort((a, b) => (a.selectorWeight > b.selectorWeight ? 1 : -1))
          .map((product) => {
            if (product.sale) {
              return (
                <Link
                  href={`/${lng}/catalog/${product.category}/${product.id}`}
                  key={product.id}
                >
                  <CardProductLan
                    id={product.id}
                    src={product.images.main}
                    alt="Карточка"
                    price={product.price}
                    salePrice={product.sale}
                    category={product.langs?.[lng]?.name}
                    lng={lng}
                  />
                </Link>
              );
            }
          })}

        {/* {products
          .sort((a, b) => {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return a.article > b.article ? -1 : 1;
          })
          .map((product) => {
            if (product.category === params.category) {
              return (
                <Link href={`/${lng}/catalog/${params.category}/${product.id}`}>
                  <CardProductLan
                    id={product.id}
                    src={product.images.main}
                    alt="Карточка"
                    price={product.price}
                    salePrice={product.sale}
                    category={product.langs?.[lng]?.name}
                    key={product.id}
                    lng={params.lng}
                  />
                </Link>
              );
            }
          })} */}
      </div>
    </div>
  );
}
