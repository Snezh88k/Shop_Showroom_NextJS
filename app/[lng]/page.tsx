import React from "react";
import styles from "./page.module.scss";
import { useTranslation } from "../i18n";
import { MainSliderClient } from "@/components/main_slider/client";

export const metadata = {
  title: "Главная страница",
  description: "Бесплатная доставка по Тбилиси",
};

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <div className={styles.first_column}>
        <div className={styles.sale}>{t("free_shipping")}</div>
      </div>
      <div className={styles.slider_wrapper}>
        <MainSliderClient lng={lng} />
      </div>
    </div>
  );
}
