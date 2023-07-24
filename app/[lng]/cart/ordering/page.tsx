"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from "./page.module.scss";

import CardProduct from "@/components/card_product/CardProduct";
import Image from "next/image";

export default function page({ repo }: any) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [storageCart, setStorageCart] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartLocalStorage = localStorage.getItem("cart");
      setStorageCart(JSON.parse(cartLocalStorage || "[]"));

      setTotalPrice(
        JSON.parse(cartLocalStorage || "[]").reduce(
          (sum: number, item: any) => {
            return sum + item.price;
          },
          0
        )
      );
    }
  }, []);

  const sendMessage = (e: any) => {
    e.preventDefault();

    let message = `<b>Новая заявка:</b>\n`;
    message += `<b>Имя: </b> ${e.target.name.value}\n`;
    message += `<b>Почта:</b> ${e.target.mail.value}\n`;
    message += `<b>Телефон: </b> ${e.target.tel.value}\n`;
    message += `<b>Адрес:</b> ${e.target.address.value}\n`;
    storageCart.forEach((item: any, index: number) => {
      message += `<b>Товар ${index + 1}:</b> \n Название: ${item.name} \n ID: ${
        item.id
      } \n Размер: ${item.size} \n Цена: ${item.price}\n Ссылка на товар: ${
        item.url
      } \n ------------------------ \n`;
    });
    message += `<b>Всего товаров:</b> ${storageCart.length}\n`;
    message += `<b>Сумма:</b> ${storageCart.reduce((sum: number, item: any) => {
      return sum + item.price;
    }, 0)}\n`;

    const TOKEN = "6038802604:AAGJX09ew1KdPN9Fk1bGVd_VhCLkGX5yn6g";
    const CHAT_ID = "-1001874434119";
    axios
      .post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((response) => {})
      .catch((err) => console.error(err));
  };
  return (
    <div className={styles.wrapper}>
      <h1>Оформление заказа</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <form className={styles.form_wrapper} onSubmit={(e) => sendMessage(e)}>
          <label className="form-name">
            Имя:
            <input type="text" name="name" className="form-name" required />
          </label>

          <label className="form-tell">
            Телефон:
            <input type="tel" name="tel" className="form-tell" required />
          </label>

          <label className="form-email">
            Email:
            <input
              id="email"
              type="email"
              name="mail"
              className="form-control"
              required
            />
          </label>
          <label className="form-address">
            Адрес:
            <input
              type="text"
              name="address"
              className="form-address"
              required
            />
          </label>

          <button type="submit">Отправить</button>
        </form>
        <div className={styles.order_info}>
          <h3>Ваш заказ</h3>
          <div className={styles.image_carousel}>
            {storageCart.map((item) => {
              return (
                <Image
                  src={item.image}
                  alt=""
                  width={80}
                  height={70}
                  className={styles.min_image}
                />
              );
            })}
          </div>

          <span className={styles.total_count}>
            Товаров к оформлению: <b>{storageCart.length}</b>
          </span>
          <span className={styles.total_price}>
            <span>Итого</span> {totalPrice} ₾
          </span>
        </div>
      </div>
    </div>
  );
}
