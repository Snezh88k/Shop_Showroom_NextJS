"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import findIcon from "../../public/menu_icon/search.svg";
import heartsIcon from "../../public/menu_icon/hearts.svg";

import DropdownMenu from "../dropdown_menu/DropdownMenu";
import { useEffect, useState } from "react";

import CartIcon from "../cart_icon/CartIcon";

import "../../app/[lng]/globals.css";
import { fillStore } from "@/redux/slices/cartSlice";
import { fallbackLng, languages } from "@/app/i18n/settings";
import LangSelector from "../lang_selector/LangSelector";
import MobileMenu from "../mobile_menu/MobileMenu";

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
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top_line}>
        <MobileMenu />
        <Link href="/">
          <div className={styles.logo}>I AM</div>
        </Link>

        <div className={styles.quick_panel}>
          <LangSelector lng={lng} />
          <Image src={findIcon} alt="find" />

          <Link href="/favorites">
            <Image src={heartsIcon} alt="hearts" />
          </Link>
          <Link href="/cart">
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
            {t("catalog")}
            <div onClick={() => setVisible(false)}>
              <DropdownMenu
                visible={visible}
                className={styles.dropdown_menu}
              />
            </div>
          </li>
          <li>
            <Link href="/payment">{t("pay")}</Link>
          </li>
          <li>
            <Link href="/delivery">{t("delivery")}</Link>
          </li>
          <li>
            <Link href="/">{t("sale")}</Link>
          </li>
          <li>
            <Link href="/instagram">instagram</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
