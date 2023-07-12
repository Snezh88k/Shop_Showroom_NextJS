import React from "react";

import styles from "./page.module.scss";
import SimpleSlider from "../components/slider/Slider";

import dataTest from "../app/TestPropducts/products.json";
import CardProduct from "@/components/card_product/CardProduct";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.catalog_wraper}>
        {dataTest.map((product) => (
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
      <div className={styles.popular_block}>
        <SimpleSlider title={"Популярное"} className={styles.slider_wrapper} />
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
