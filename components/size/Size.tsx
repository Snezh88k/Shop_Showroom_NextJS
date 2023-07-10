import React from "react";
import styles from "./Size.module.scss";

interface SizeProps {
  rus: string;
  int: string;
}

export default function Size({ rus, int }: SizeProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.rus_size}>{rus}</span>
      <span className={styles.int_size}>{int}</span>
    </div>
  );
}
