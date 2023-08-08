
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
      <button onClick={fetchData}>Fetch</button>
      <h1>Все товары</h1>
      <div className={styles.catalog_wraper}>
        {dataTest
          .sort((a, b) => (a.selectorWeight > b.selectorWeight ? 1 : -1))
          .map((product) => (
            <Link href={`/catalog/${product.category}/${product.id}`}>
              <CardProduct
                id={product.id}
                src={product.images.main}
                alt="Карточка"
                price={product.price}
                category={product.name}
                key={product.id}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

// Верхнее меню: Каталог/Оплата/ Доставка/Акции/Instagram
// • Выпадающее меню Каталог: Показать все/Топы и рубашки/Платья и юбки/Брюки и джинсы/Костюмы и комплекты
// • Нижнее меню: Возврат/Публичная оферта
// • Меню в вернем правом углу Тбилиси/Поиск/Избранное/Корзина/Переключить язык
// • Заменить логотип на I AM
// • Вместо блоков: Вы просматривали/Популярное, сделать блок «С чем носить», туда будем добавлять вещи из каталога, которые будут сочетаться с тем, что просматривает клиент
