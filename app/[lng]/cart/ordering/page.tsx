"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from "./page.module.scss";

import Image from "next/image";
import { clearItems } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";

interface Params {
  params: {
    lng: string;
  };
}

export default function page({ params: { lng } }: Params) {
  const { t } = useTranslation(lng);

  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [storageCart, setStorageCart] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState(false);

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
    message += `<b>Улица:</b> ${e.target.address_street.value}\n`;
    message += `<b>Дом:</b> ${e.target.address_house.value}\n`;
    message += `<b>Подъезд:</b> ${e.target.address_entrance.value}\n`;
    message += `<b>Квартира:</b> ${e.target.address_flat.value}\n`;
    message += `<b>Метод оплаты:</b> ${e.target.contact.value}\n`;

    message += `<b>Дата рождения:</b> ${e.target.date.value}\n`;
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

    axios
      .post(`/api/user`, {
        message: message,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch(clearItems());
          setIsVisible(true);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <title>{t("making_an_order")}</title>
      <div className={styles.wrapper}>
        <div
          className={styles.order_processed}
          style={isVisible ? { display: "flex" } : { display: "none" }}
        >
          <div className={styles.modal_window}>
            <span>{t("order_successfully")}</span>
            <span>{t("manager_contact")}</span>
            <Link href={`/${lng}`}>
              <span className={styles.neon_text}>{t("back_main_page")}</span>
            </Link>
          </div>
        </div>
        <h1>{t("making_an_order")}</h1>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className={styles.section_wrapper}
        >
          <form
            className={styles.form_wrapper}
            onSubmit={(e) => sendMessage(e)}
          >
            <label className="form-name">
              {t("name")}*
              <input type="text" name="name" className="form-name" required />
            </label>

            <label className="form-tell">
              {t("tel")}*
              <input type="tel" name="tel" className="form-tell" required />
            </label>

            <label className="form-email">
              Email*
              <input
                id="email"
                type="email"
                name="mail"
                className="form-control"
                required
              />
            </label>

            <label className="form-date">
              {t("date")}
              <input type="date" name="date" className="form-date" />
            </label>
            <span> {t("address")}:</span>
            <label className="form-address-street">
              {t("address_street")}*
              <input
                type="text"
                name="address_street"
                className="form-address-street"
                required
              />
            </label>
            <label className="form-address-house">
              {t("address_house")}*
              <input
                type="text"
                name="address_house"
                className="form-address-house"
                required
              />
            </label>
            <label className="form-address-entrance">
              {t("address_entrance")}
              <input
                type="text"
                name="address_entrance"
                className="form-address-entrance"
              />
            </label>
            <label className="form-address-flat">
              {t("address_flat")}
              <input
                type="text"
                name="address_flat"
                className="form-address-flat"
              />
            </label>

            <p> {t("payment_method")}:</p>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                id="contactChoice1"
                name="contact"
                value="card"
              />
              <label htmlFor="contactChoice1" style={{ marginLeft: "5px" }}>
                {t("card")}
              </label>

              <input
                type="radio"
                id="contactChoice2"
                name="contact"
                value="cash"
                style={{ marginLeft: "15px" }}
              />
              <label htmlFor="contactChoice2" style={{ marginLeft: "5px" }}>
                {t("cash")}
              </label>
            </div>

            <button
              className={styles.submit_button}
              type="submit"
              disabled={storageCart.length === 0 ? true : false}
            >
              {t("to_send")}
            </button>
          </form>
          <div className={styles.order_info}>
            <h3>{t("your_order")}</h3>
            <div className={styles.image_carousel}>
              {storageCart.map((item, index) => {
                return (
                  <Image
                    src={item.image}
                    alt=""
                    width={50}
                    height={70}
                    className={styles.min_image}
                    key={index}
                  />
                );
              })}
            </div>

            <span className={styles.total_count}>
              {t("goods_for_registration")}
              <b>{storageCart.length}</b>
            </span>
            <span className={styles.total_price}>
              <span> {t("total")}</span> {totalPrice} ₾
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
