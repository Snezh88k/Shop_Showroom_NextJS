import Image from "next/image";
import React from "react";

import styles from "./CartIcon.module.scss";

import bagIcon from "../../public/menu_icon/shopping_bag.svg";

interface CartIconProps {
  count: number | undefined;
}

export default function CartIcon({ count }: CartIconProps) {
  return (
    <div className={styles.wrapper}>
      <Image src={bagIcon} alt="bag" />
      <span>{count}</span>
    </div>
  );
}
