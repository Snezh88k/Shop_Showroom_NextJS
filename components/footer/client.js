"use client";

import Footer from "./Footer";
import { useTranslation } from "../../app/i18n/client";

export const FooterLan = ({ lng }) => {
  const { t } = useTranslation(lng);
  return <Footer t={t} lng={lng} />;
};
