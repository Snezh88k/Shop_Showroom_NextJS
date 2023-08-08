import React from "react";
import styles from "./page.module.scss";

import dataTest from "../../../TestPropducts/products.json";
import CardProduct from "@/components/card_product/CardProduct";
import Link from "next/link";

interface CatalogProps {
  params: {
    category: string;
  };
}


export default function page({ params }: CatalogProps) {
  return (
    <div className={styles.wrapper}>
      {params.category === "tops_shirts" ? <h1>Топы и рубашки</h1> : ""}
      {params.category === "dresses_skirts" ? <h1>Платья и юбки</h1> : ""}
      {params.category === "pants_jeans" ? <h1>Брюки и шорты</h1> : ""}
      {params.category === "suits_sets" ? <h1>Костюмы и комплекты</h1> : ""}
      <div className={styles.products}>
        {dataTest
          .sort((a, b) => {
            // сначала сортируем по полю 'selectorWeight'
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            // если имена совпадают, то сортируем по 'id'
            return a.article > b.article ? -1 : 1;
          })
          .map((product) => {
            if (product.category === params.category)
              return (
                <Link href={`${params.category}/${product.id}`}>
                  <CardProduct
                    id={product.id}
                    src={product.images.main}
                    alt="Карточка"
                    price={product.price}
                    category={product.name}
                    key={product.id}
                  />
                </Link>
              );
          })}
      </div>
    </div>
  );
}
