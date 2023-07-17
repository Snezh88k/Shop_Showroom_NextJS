"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import ShoppingBag from "@/public/menu_icon/shopping_bag";
import InformationСard from "@/components/information_card/InformationСard";
import TruckIcon from "@/public/icons/TruckIcon";
import BankIcon from "@/public/icons/BankIcon";

import dataTest from "../../app/TestPropducts/products.json";

import CardProductInCart from "@/components/card_product_in_cart/CardProductInCart";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { revomeTotalPrice } from "@/redux/slices/cartSlice";

interface Product {
  product: {
    id: string;
    name: string;
    images: string;
    price: number;
    size: {
      int: any;
      rus: any;
    };
  };
}

export default function page() {
  const [products, setProducts] = useState<string[]>([]);
  const [productsFromData, setProductsFromData] = useState<any>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(revomeTotalPrice());
  }, []);

  const totalPrice = useSelector((state: any) => state.cart.totalPrice);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");

      cart ? setProducts(cart.split(" ")) : null;
    }
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      let intermediateArrayProducts: any = [];
      products.map((product) => {
        if (product) {
          const parseProduct = JSON.parse(product);
          const productFromData = dataTest.find((item) => {
            if (parseProduct.id === item.id) {
              return item;
            } else {
              return null;
            }
          });

          const productObject = {
            id: productFromData?.id,
            name: productFromData?.name,
            size: productFromData?.size[parseProduct.size],
            price: productFromData?.price,
            image: productFromData?.images.main,
          };

          intermediateArrayProducts.push(productObject);
        }
        setProductsFromData(productsFromData.concat(intermediateArrayProducts));
      });
    }
  }, [products]);

  return (
    <div className={styles.wrapper}>
      {products.length > 0 ? (
        <div className={styles.full_cart_wrapper}>
          <h1>корзина</h1>

          {productsFromData.map((product: any, index: number) => {
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
