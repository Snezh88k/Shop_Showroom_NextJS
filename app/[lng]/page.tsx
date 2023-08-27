import React from "react";

import styles from "./page.module.scss";

import dataTest from "../../app/TestPropducts/products.json";
import { CardProductLan } from "@/components/card_product/client";
import Link from "next/link";

import { useTranslation } from "../i18n";

import axios from "axios";
import MainSlider from "@/components/main_slider/MainSlider";

import photo from "@/public/photo.jpg";
import Image from "next/image";

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
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.first_column}>
          {/* <div className={styles.message}>
            <Image src={photo} width={100} height={100} alt="photo" />
            <p>
              <i>
                « Одежда, которая делает вас особенными! Приветствуем вас в
                нашем новом мультибрендовом магазине в Тбилиси. Мы открыты для
                вас каждый день, чтобы подарить вам вдохновение и самые
                актуальные модные решения. »
              </i>
            </p>
          </div> */}

          <div className={styles.sale}>SALE 20% OFF ALL</div>
        </div>
        <div style={{ width: "515px" }}>
          <MainSlider />
        </div>
      </div>
      {/* <h1>{t("h_all_products")}</h1> */}

      {/* <div className={styles.catalog_wraper}>
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
      </div> */}
    </div>
  );
}
