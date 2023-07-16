"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import ShoppingBag from "@/public/menu_icon/shopping_bag";
import InformationСard from "@/components/information_card/InformationСard";
import TruckIcon from "@/public/icons/TruckIcon";
import BankIcon from "@/public/icons/BankIcon";

import dataTest from "../../app/TestPropducts/products.json";
import CardProduct from "@/components/card_product/CardProduct";
import CardProductInCart from "@/components/card_product_in_cart/CardProductInCart";

export default function page() {
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = localStorage.getItem("cart");

  const productsList = cart?.split(" ");

  useEffect(() => {
    productsList?.map((item) => {
      if (item) {
        const parseProduct = JSON.parse(item);
        dataTest.find((product) => {
          if (parseProduct.id === product.id) {
            const nowPrice = totalPrice + product.price;
            setTotalPrice(nowPrice);
          } else {
            return null;
          }
        });
      }
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {productsList ? (
        <div className={styles.full_cart_wrapper}>
          <h1>корзина</h1>
          {productsList?.map((product) => {
            if (product) {
              const parseProduct = JSON.parse(product);
              const a = dataTest.find((item) => {
                if (parseProduct.id === item.id) {
                  return item;
                } else {
                  return null;
                }
              });
              if (a) {
                return (
                  <CardProductInCart
                    product={a}
                    selectSize={parseProduct.size}
                  />
                );
              }
            }
          })}

          <div className={styles.total}>
            <span className={styles.title}>Итого</span>
            <span className={styles.price}>{totalPrice} ₾</span>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.empty_cart}>
            <ShoppingBag className={styles.bag_icon} />
            <h3>ваша корзина пуста</h3>
            <span>
              используйте поиск либо навигацию сверху чтобы найти нужный товар
            </span>
          </div>

          <div className={styles.info_card_wrapper}>
            <InformationСard
              title="Бесплатная доставка"
              description="По всей территории РФ и РБ"
              icon={<TruckIcon fill="black" />}
            />
            <InformationСard
              title="Оплата разными способами"
              description="Картой, наличными и так далее"
              icon={<BankIcon />}
            />
            <InformationСard
              title="Политика возврата"
              description="Верните товар в течении 14 дней"
              icon={<TruckIcon fill="black" />}
            />
          </div>
        </>
      )}
    </div>
  );
}
