import { useTranslation } from '../../../i18n'
import CatalogCategory from "./CatalogCategory";

export const CatalogCategoryLan = async ({ lng }) => {
  const { t } = await useTranslation(lng)
  return <CatalogCategory t={t} lng={lng} />
}











