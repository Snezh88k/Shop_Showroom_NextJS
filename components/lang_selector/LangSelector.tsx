"use client";

import React, { useEffect, useState } from "react";
import styles from "./LangSelector.module.scss";

export default function LangSelector({ lng }: { lng: string }) {
  const changeLan = (e: any) => {
    const path = document.location.pathname.slice(3);
    window.location.href = `/${e.target.value}${path}`;
  };

  return (
    <select
      name="lang"
      id="lang"
      value={lng}
      onChange={(e) => changeLan(e)}
      className={styles.lang_select}
    >
      <option value="ru">RU</option>
      <option value="ge">GE</option>
      <option value="en">EN</option>
    </select>
  );
}
