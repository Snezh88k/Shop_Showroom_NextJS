"use client";

import SizeTable from "./SizeTable";
import { useTranslation } from "../../app/i18n/client";

export const HeaderClient = ({ lng }) => {
  const { t } = useTranslation(lng);
  return <SizeTable t={t} lng={lng} />;
};
