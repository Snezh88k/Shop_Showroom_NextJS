import { useTranslation } from "@/app/i18n";
import Footer from "./Footer";

export const FooterLan = async ({ lng }) => {
  const { t } = await useTranslation(lng);
  return <Footer t={t} lng={lng} />;
};
