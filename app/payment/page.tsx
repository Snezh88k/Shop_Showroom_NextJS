import React from "react";
import styles from "./page.module.scss";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <h1>ОПЛАТА ЗАКАЗА</h1>
      <p>
        💳 Вы можете оплатить заказ курьеру при получении и после примерки -
        наличными или картой.
      </p>
    </div>
  );
}
