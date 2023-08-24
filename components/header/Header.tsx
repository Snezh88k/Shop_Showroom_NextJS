"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import DropdownMenu from "../dropdown_menu/DropdownMenu";
import { useEffect, useState } from "react";

import CartIcon from "../cart_icon/CartIcon";

import "../../app/[lng]/globals.css";
import { fillStore } from "@/redux/slices/cartSlice";
import { fallbackLng, languages } from "@/app/i18n/settings";
import LangSelector from "../lang_selector/LangSelector";
import MobileMenu from "../mobile_menu/MobileMenu";
import { fillFavoriteStore } from "@/redux/slices/favoritesSlice";
import HeartsIcon from "@/public/menu_icon/hearts";
import FindIcon from "@/public/menu_icon/Find_icon";

interface HeaderProps {
  t: any;
  lng: string;
}

export default function Header({ t, lng }: HeaderProps) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const countInCart = useSelector((state: any) => state.cart.allCount);

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch(fillStore(cartLocalStorage));
    const favoritesLocalStorage = JSON.parse(
      localStorage.getItem("favorite") || "[]"
    );
    dispatch(fillFavoriteStore(favoritesLocalStorage));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top_line}>
        <MobileMenu t={t} lng={lng} />
        <Link href={`/${lng}`}>
          <div className={styles.logo}>I AM</div>
        </Link>

        <div className={styles.quick_panel}>
          <LangSelector lng={lng} t={t} />
          <FindIcon />

          <Link href={`/${lng}/favorites`} className={styles.hearts_icon}>
            <HeartsIcon />
          </Link>
          <Link href={`/${lng}/cart`}>
            <CartIcon count={countInCart} />
          </Link>
        </div>
      </div>

      <nav>
        <ul className={styles.main_menu}>
          <li
            className={styles.dropdown_menu_link}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            <Link href={`/${lng}`}> {t("catalog")}</Link>

            <div onClick={() => setVisible(false)}>
              <DropdownMenu
                visible={visible}
                className={styles.dropdown_menu}
                t={t}
                lng={lng}
              />
            </div>
          </li>
          <li>
            <Link href={`/${lng}/payment`}>{t("pay")}</Link>
          </li>
          <li>
            <Link href={`/${lng}/delivery`}>{t("delivery")}</Link>
          </li>
          <li>
            <Link
              href={`/${lng}/`}
              style={{
                color: "#ff0099",
                filter: "drop-shadow(0px 0px 2px rgb(255, 0, 149))",
              }}
            >
              {t("sale")}
            </Link>
          </li>
          <li>
            <Link href={`/${lng}/instagram`}>instagram</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
