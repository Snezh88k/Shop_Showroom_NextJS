

import React from 'react'
import styles from './CatalogCategory.module.scss'
import Link from 'next/link'


interface CatalogCategoryProps {
    t: any;
    lng: string
  }

export default function CatalogCategory({t, lng}: CatalogCategoryProps) {
 

  
  return (
    <>
    <li>
    <Link href={`/${lng}/catalog/all_products`}>{t("category_show_everything")}</Link>
  </li>
  <li>
    <Link href={`/${lng}/catalog/tops_shirts`}>{t("category_tops_and_shirts")}</Link>
  </li>
  <li>
    <Link href={`/${lng}/catalog/dresses_skirts`}>{t("category_dresses_and_skirts")}</Link>
  </li>
  <li>
    <Link href={`/${lng}/catalog/pants_jeans`}>{t("category_pants_and_shorts")}</Link>
  </li>
  <li>
    <Link href={`/${lng}/catalog/suits_sets`}>{t("category_suits_and_sets")}</Link>
  </li>
  </>
  )
}
