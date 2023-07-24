"use client";

import React from "react";
import styles from "./page.module.scss";
import ShoppingBag from "@/public/menu_icon/shopping_bag";
import InformationСard from "@/components/information_card/InformationСard";
import TruckIcon from "@/public/icons/TruckIcon";
import BankIcon from "@/public/icons/BankIcon";

import CardProductInCart from "@/components/card_product_in_cart/CardProductInCart";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function page() {
  const productsFromStore = useSelector((state: any) => state.cart.items);

  const totalPrice = useSelector((state: any) => state.cart.totalPrice);

  return (
    <div className={styles.wrapper}>
      {productsFromStore.length > 0 ? (
        <div className={styles.full_cart_wrapper}>
          <h1>корзина</h1>
          {productsFromStore.map((product: any, index: number) => {
            return <CardProductInCart product={product} key={index} />;
          })}

          <div className={styles.total}>
            <span className={styles.title}>Итого</span>
            <span className={styles.price}>{totalPrice} ₾</span>
          </div>

          <Link href="cart/ordering">
            <div>
              <span>Перейти к оформлению</span>
            </div>
          </Link>
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
