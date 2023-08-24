"use client";

import CardProduct from "./CardProduct";
import { useTranslation } from "../../app/i18n/client";

export const CardProductLan = ({
  id,
  src,
  alt,
  price,
  category,
  lng,
  salePrice,
}) => {
  const { t } = useTranslation(lng);
  return (
    <CardProduct
      t={t}
      lng={lng}
      id={id}
      src={src}
      alt={alt}
      price={price}
      category={category}
      salePrice={salePrice}
    />
  );
};
