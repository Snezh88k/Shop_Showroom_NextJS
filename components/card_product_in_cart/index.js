import { useTranslation } from "../../../i18n";
import CardProductInCart from "./CardProductInCart";

export const CardProductInCartLan = async ({ lng, product }) => {
  const { t } = await useTranslation(lng);
  return <CardProductInCart t={t} lng={lng} product={product} />;
};
