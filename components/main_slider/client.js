"use client";

import MainSlider from "./MainSlider";
import { useTranslation } from "../../app/i18n/client";

export const MainSliderClient = ({ lng }) => {
  const { t } = useTranslation(lng);
  return <MainSlider t={t} lng={lng} />;
};
