"use client";

import Header from "./Header";
import { useTranslation } from "../../app/i18n/client";

export const HeaderLan = ({ lng }) => {
  const { t } = useTranslation(lng);
  return <Header t={t} lng={lng} />;
};
