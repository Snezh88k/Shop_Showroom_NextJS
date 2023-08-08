import { useTranslation } from '../../../i18n'
import Header from "./Header";

export const HeaderLan = async ({ lng }) => {
  const { t } = await useTranslation(lng)
  return <Header t={t} lng={lng} />
}









