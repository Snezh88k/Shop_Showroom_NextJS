import React, { useState } from "react";
import Link from "next/link";

import styles from "./MobileMenu.module.scss";
import BurgerMenuIcon from "../burger_menu_icon/BurgerMenuIcon";

export default function MobileMenu() {
  const [visible, setVisible] = useState(false);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const openCatalog = () => {
    setVisible(!visible);
  };

  const closeCatalog = (e: any) => {
    e.stopPropagation();
    setHamburgerOpen(false);
  };

  const closeMenu = (e: any) => {
    if (e.target.tagName.toLowerCase() === "a") {
      setHamburgerOpen(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div onClick={() => setHamburgerOpen(!hamburgerOpen)}>
        <BurgerMenuIcon isOpen={hamburgerOpen} />
      </div>

      <ul
        className={styles.main_menu__mobile}
        style={
          hamburgerOpen
            ? { width: "100%", opacity: "1" }
            : { width: "0", opacity: "0", pointerEvents: "none" }
        }
        onClick={(e) => closeMenu(e)}
      >
        <li onClick={() => openCatalog()}>
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
    </div>
  );
}
