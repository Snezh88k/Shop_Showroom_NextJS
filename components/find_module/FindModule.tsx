import Image from "next/image";
import React from "react";
import styles from "./FindModule.module.scss";

import findIcon from "../../public/menu_icon/search.svg";

export default function FindModule() {
  return (
    <span className={styles.find}>
      <div className={styles.find_input__wrapper}>
        <input type="text" className={styles.find_input} />
      </div>
      <Image src={findIcon} alt="find" className={styles.find_image} />
    </span>
  );
}
