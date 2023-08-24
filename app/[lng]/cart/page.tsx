"use client";

import React, { useEffect } from "react";
import styles from "./page.module.scss";
import ShoppingBag from "@/public/menu_icon/shopping_bag";
import InformationСard from "@/components/information_card/InformationСard";
import TruckIcon from "@/public/icons/TruckIcon";
import BankIcon from "@/public/icons/BankIcon";

import { CardProductInCartClient } from "@/components/card_product_in_cart/client";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";

interface Params {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: Params) {
  const { t } = useTranslation(lng);

  const productsFromStore = useSelector((state: any) => state.cart.items);

  const totalPrice = useSelector((state: any) => state.cart.totalPrice);

  return (
    <div className={styles.wrapper}>
      {productsFromStore.length > 0 ? (
        <div className={styles.full_cart_wrapper}>
          {productsFromStore.map((product: any, index: number) => {
            return (
              <CardProductInCartClient
                product={product}
                lng={lng}
                key={index}
              />
            );
          })}

          <div className={styles.total}>
            <span className={styles.title}>{t("total")}</span>
            <span className={styles.price}>{totalPrice} ₾</span>
          </div>

          <Link href="cart/ordering">
            <div className={styles.ordering_button}>
              <span>{t("proceed_to_checkout")}</span>
            </div>
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.empty_cart}>
            <ShoppingBag className={styles.bag_icon} />
            <h3>{t("cart_is_empty")}</h3>
          </div>

          {/* <div className={styles.info_card_wrapper}>
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
          </div> */}
        </>
      )}
    </div>
  );
}
