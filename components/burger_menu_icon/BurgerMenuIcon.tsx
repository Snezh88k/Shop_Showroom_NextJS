import React, { useEffect, useState } from "react";
import styles from "./BurgerMenuIcon.module.scss";
import clsx from "clsx";

interface BurgerMenuIconProps {
  isOpen: boolean;
}
export default function BurgerMenuIcon({ isOpen }: BurgerMenuIconProps) {
  useEffect(() => {
    const BURGER_MENU = document.querySelector(`.${styles.burger_menu}`);
    const BODY = document.querySelector("body");

    isOpen ? BODY?.classList.add("close") : BODY?.classList.remove("close");

    isOpen
      ? BURGER_MENU?.classList.add(`${styles.menu_open}`)
      : BURGER_MENU?.classList.remove(`${styles.menu_open}`);
  }, [isOpen]);

  return (
    <div className={clsx(styles.burger_menu)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
