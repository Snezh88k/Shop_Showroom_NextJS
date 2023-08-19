import React from "react";
import styles from "./page.module.scss";

import dataTest from "../../../TestPropducts/products.json";
import CardProduct from "@/components/card_product/CardProduct";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function page({ params }: any) {
  const { t } = await useTranslation(params.lng);

  return (
    <div className={styles.wrapper}>
      {params.category === "tops_shirts" ? (
        <h1>{t("category_tops_and_shirts")}</h1>
      ) : (
        ""
      )}
      {params.category === "dresses_skirts" ? (
        <h1>{t("category_dresses_and_skirts")}</h1>
      ) : (
        ""
      )}
      {params.category === "pants_jeans" ? (
        <h1>{t("category_pants_and_shorts")}</h1>
      ) : (
        ""
      )}
      {params.category === "suits_sets" ? (
        <h1>{t("category_suits_and_sets")}</h1>
      ) : (
        ""
      )}
      <div className={styles.products}>
        {dataTest
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
            if (product.category === params.category)
              return (
                <Link href={`/catalog/${params.category}/${product.id}`}>
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
