// Выпадающее меню Каталог: Показать все/Топы и рубашки/Платья и юбки/Брюки и джинсы/Костюмы и комплекты

"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import findIcon from "../../public/menu_icon/search.svg";
import heartsIcon from "../../public/menu_icon/hearts.svg";

import DropdownMenu from "../dropdown_menu/DropdownMenu";
import { useEffect, useState } from "react";
import FindModule from "../find_module/FindModule";
import CartIcon from "../cart_icon/CartIcon";

import clsx from "clsx";

import "../../app/[lng]/globals.css";
import { fillStore } from "@/redux/slices/cartSlice";
import { Trans } from "react-i18next";
import { fallbackLng, languages } from "@/app/i18n/settings";
import axios from "axios";

interface HeaderProps {
  t: any;
  lng: any;
}

export default function Header({ t, lng }: HeaderProps) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  const [visible, setVisible] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [path, setPath] = useState("");

  const countInCart = useSelector((state: any) => state.cart.allCount);

  const dispatch = useDispatch();

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch(fillStore(cartLocalStorage));
  }, []);

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    const BODY = document.querySelector("body");
    BODY?.classList.toggle("close");
  };

  const openCatalog = (e: any) => {
    setVisible(!visible);
  };

  const closeCatalog = (e: any) => {
    e.stopPropagation();
    setIsOpenMenu(false);
    const BODY = document.querySelector("body");
    BODY?.classList.remove("close");
  };

  const closeMenu = (e: any) => {
    if (e.target.tagName.toLowerCase() === "a") {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    setPath(document.location.pathname.slice(3));
  }, []);

  const changeLan = (e: any) => {
    window.location.href = `/${e.target.value}${path}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top_line}>
        <div
          className={clsx(
            styles.burger_menu,
            isOpenMenu ? styles.menu_open : ""
          )}
          onClick={openMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link href="/">
          <div className={styles.logo}>I AM</div>
        </Link>

        <div className={styles.quick_panel}>
          <select
            name="lang"
            id="lang"
            value={lng}
            onChange={(e) => changeLan(e)}
            className={styles.lang_select}
          >
            <option value="ru">RU</option>
            <option value="ge">GE</option>
          </select>
          <Image src={findIcon} alt="find" />
          {/* <FindModule /> */}
          <span>
            <Image src={heartsIcon} alt="hearts" />
          </span>
          <span>
            <Link href="/cart">
              <CartIcon count={countInCart} />
            </Link>
          </span>
        </div>
      </div>

      <nav>
        <ul
          className={styles.main_menu__mobile}
          style={
            isOpenMenu
              ? { width: "100%", opacity: "1" }
              : { width: "0", opacity: "0", pointerEvents: "none" }
          }
          onClick={(e) => closeMenu(e)}
        >
          <li onClick={(e) => openCatalog(e)}>
            каталог
            <ul
              style={visible ? { display: "block" } : { display: "none" }}
              onClick={(e) => closeCatalog(e)}
            >
              <li>
                <Link href="/">Показать все</Link>
              </li>
              <li>
                <Link href="/catalog/tops_shirts">Топы и рубашки</Link>
              </li>
              <li>
                <Link href="/catalog/dresses_skirts">Платья и юбки</Link>
              </li>
              <li>
                <Link href="/catalog/pants_jeans">Брюки и джинсы</Link>
              </li>
              <li>
                <Link href="/catalog/suits_sets">Костюмы и комплекты</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/payment">оплата</Link>
          </li>
          <li>
            <Link href="/delivery">доставка</Link>
          </li>
          <li>
            <Link href="/">акции</Link>
          </li>
          <li>
            <Link href="/instagram">instagram</Link>
          </li>
        </ul>

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
