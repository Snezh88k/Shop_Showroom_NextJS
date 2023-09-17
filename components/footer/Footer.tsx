import React from "react";

import styles from "./Footer.module.scss";
import Link from "next/link";

interface FooterProps {
  t: any;
  lng: string;
}

export default function Footer({ t, lng }: FooterProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <Link href={`/${lng}`}>
          <div className={styles.logo}>I AM</div>
        </Link>
        <span>© «‎I AM SHOP»‎, 2023</span>
      </div>

      <div className={styles.sections}>
        <Link
          href={
            "https://drive.google.com/file/d/1aSsTKNxjMog7pw6iRkyLHtXk9RRjcEk6/view?usp=sharing"
          }
          target="_blank"
        >
          <span>{t("offer")}</span>{" "}
        </Link>

        <Link href={`/${lng}/refund`}>
          <span>{t("refund")}</span>
        </Link>
      </div>
    </div>
  );
}
