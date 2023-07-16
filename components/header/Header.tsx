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
import { createCountInCart } from "@/redux/slices/cartSlice";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const countInCart = useSelector((state: any) => state.cart.allCount);

  const dispatch = useDispatch();

  useEffect(() => {
    const count = localStorage.getItem("cart")
      ? localStorage.getItem("cart")?.split(" ").length
      : 0;
    dispatch(createCountInCart(count));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top_line}>
        <Link href="/">
          <div className={styles.logo}>I AM</div>
        </Link>

        <div className={styles.quick_panel}>
          <FindModule />
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
        <ul className={styles.main_menu}>
          <li
            className={styles.dropdown_menu_link}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            <Link href="/">каталог</Link>
            <div onClick={() => setVisible(false)}>
              <DropdownMenu
                visible={visible}
                className={styles.dropdown_menu}
              />
            </div>
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
      </nav>
    </div>
  );
}

// Выпадающее меню Каталог: Показать все/Топы и рубашки/Платья и юбки/Брюки и джинсы/Костюмы и комплекты
