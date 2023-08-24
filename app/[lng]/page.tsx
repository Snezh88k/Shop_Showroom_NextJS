import React from "react";

import styles from "./page.module.scss";

import dataTest from "../../app/TestPropducts/products.json";
import { CardProductLan } from "@/components/card_product/client";
import Link from "next/link";

import { useTranslation } from "../i18n";

import axios from "axios";

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

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  const fetchData = () => {
    axios
      .get(`/api/likes`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.wrapper}>
      {/* <button onClick={fetchData}>Fetch</button> */}
      <h1>{t("h_all_products")}</h1>
      <div className={styles.catalog_wraper}>
        {products
          .sort((a, b) => (a.selectorWeight > b.selectorWeight ? 1 : -1))
          .map((product) => (
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
          ))}
      </div>
    </div>
  );
}
