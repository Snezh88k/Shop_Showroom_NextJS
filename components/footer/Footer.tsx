import React from "react";

import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logo}>I AM</div>
      </Link>
      <div className={styles.sections}>
        <span>Публичная оферта</span>
        <span>Возврат</span>
      </div>
    </div>
  );
}
