"use client";

import CardProductInCart from "./CardProductInCart";
import { useTranslation } from "../../app/i18n/client";

export const CardProductInCartClient = ({ lng, product }) => {
  const { t } = useTranslation(lng);
  return <CardProductInCart t={t} lng={lng} product={product} />;
};
