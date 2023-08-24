import { useTranslation } from "../../../i18n";
import CardProduct from "./CardProduct";

export const CardProductLan = async ({
  id,
  src,
  alt,
  price,
  category,
  lng,
}) => {
  const { t } = await useTranslation(lng);
  return (
    <CardProduct
      t={t}
      lng={lng}
      id={id}
      src={src}
      alt={alt}
      price={price}
      category={category}
    />
  );
};
