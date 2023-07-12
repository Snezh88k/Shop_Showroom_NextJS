import React from "react";
import styles from "./Size.module.scss";
import clsx from "clsx";

interface SizeProps {
  rus: string | null;
  int: string | null;
  availability: boolean;
  select: boolean;
  onClick: () => void;
}

export default function Size({
  rus,
  int,
  availability,
  select,
  onClick,
}: SizeProps) {
  return (
    <button
      className={clsx(
        styles.wrapper,
        availability === false ? styles.inactive : "",
        select === true ? styles.select : ""
      )}
      onClick={onClick}
      disabled={availability === false ? true : false}
    >
      <span className={styles.rus_size}>{rus}</span>
      <span className={styles.int_size}>{int}</span>
    </button>
  );
}
