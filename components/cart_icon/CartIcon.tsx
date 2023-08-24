import Image from "next/image";
import React from "react";

import styles from "./CartIcon.module.scss";

import bagIcon from "../../public/menu_icon/shopping_bag.svg";
import ShoppingBag from "@/public/menu_icon/shopping_bag";

interface CartIconProps {
  count: number | undefined;
}

export default function CartIcon({ count }: CartIconProps) {
  return (
    <div className={styles.wrapper}>
      <ShoppingBag />
      <span>{count}</span>
    </div>
  );
}
