import React from "react";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";

interface FooterProps {
  t: any;
  lng: string;
}

export default function Footer({ t }: FooterProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <Link href="/">
          <div className={styles.logo}>I AM</div>
        </Link>
        <span>© «‎I AM SHOP»‎, 2023</span>
      </div>

      <div className={styles.sections}>
        <Link
          href={
            "https://docs.google.com/document/d/e/2PACX-1vSnZ5BFaR7XbtnYOukBedWZ-olfISd58WsFfXbVmh4xLYuhW-PhnW6TC78kUERglA/pub?embedded=true"
          }
        >
          <span>{t("offer")}</span>{" "}
        </Link>

        <span>{t("refund")}</span>
      </div>
    </div>
  );
}
