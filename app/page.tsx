import React from "react";

import styles from "./page.module.scss";
import SimpleSlider from "../components/slider/Slider";

import SelectionCard from "@/components/card_selection/SelectionCard";

import dataTest from "../app/TestPropducts/products.json";
import CardProduct from "@/components/card_product/CardProduct";

export default function Home() {
  const images = [
    {
      path: "/product/photo(1).jpg",
      category: "товары на акции",
      description: "до 50%",
    },
    {
      path: "/product/photo(2).jpg",
      category: "товары на акции",
      description: "до 50%",
    },
    {
      path: "/product/photo(3).jpg",
      category: "товары на акции",
      description: "до 50%",
    },
    {
      path: "/product/photo(4).jpg",
      category: "товары на акции",
      description: "до 50%",
    },
  ];

  return (
    <div>
      {/* <div className={styles.random_selection_block}>
        {images.map((image) => {
          return (
            <SelectionCard
              src={image.path}
              alt="Карточка"
              category="Товары на акции"
              description="до 50%"
              key={image.path}
            />
          );
        })}
      </div> */}
      <div className={styles.catalog_wraper}>
        {dataTest.map((product) => (
          <CardProduct
            id={product.id}
            src={product.images.main}
            height={350}
            alt="Карточка"
            price={product.price}
            category="брюки"
            key={product.id}
          />
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
