import React from "react";

import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <Link href="/">
          <div className={styles.logo}>I AM</div>
        </Link>
        <span>© «‎I AM SHOP»‎, 2023</span>
      </div>

      <div className={styles.sections}>
        <span>Публичная оферта</span>
        <span>Возврат</span>
      </div>
    </div>
  );
}
