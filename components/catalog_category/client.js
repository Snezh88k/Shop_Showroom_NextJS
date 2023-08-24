"use client";

import CatalogCategory from "./CatalogCategory";
import { useTranslation } from "../../app/i18n/client";

export const CatalogCategoryLan = ({ lng }) => {
  const { t } = useTranslation(lng);
  return <CatalogCategory t={t} lng={lng} />;
};
