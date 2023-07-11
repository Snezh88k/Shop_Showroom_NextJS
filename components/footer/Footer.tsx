import React from "react";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.sections}>
        <span>Публичная оферта</span>
        <span>Возврат</span>
      </div>
    </div>
  );
}
