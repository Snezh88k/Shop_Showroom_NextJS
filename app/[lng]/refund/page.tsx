import React from "react";
import styles from "./page.module.scss";
import { useTranslation } from "@/app/i18n";

interface Params {
  params: {
    lng: string;
  };
}

export default async function part({ params: { lng } }: Params) {
  const { t } = await useTranslation(lng, "refund-page");

  return (
    <div className={styles.wrapper}>
      <h1>{t("title")}</h1>
      <p>{t("10.1")}</p>
    </div>
  );
}
