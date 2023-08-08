
'use client'
import React  from "react";

import styles from "./page.module.scss";

import dataTest from "../../app/TestPropducts/products.json";
import CardProduct from "@/components/card_product/CardProduct";
import Link from "next/link";

import { useTranslation } from "../i18n";
import axios from "axios";

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
      <h1>Все товары</h1>
      <div className={styles.catalog_wraper}>
        {dataTest
          .sort((a, b) => (a.selectorWeight > b.selectorWeight ? 1 : -1))
          .map((product) => (
            <Link href={`/${lng}/catalog/${product.category}/${product.id}`}      key={product.id}>
              <CardProduct
                id={product.id}
                src={product.images.main}
                alt="Карточка"
                price={product.price}
                category={product.name}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

