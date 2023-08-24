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
      {rus ? <span className={styles.size}>{rus}</span> : null}
      {int ? <span className={styles.size}>{int}</span> : null}
    </button>
  );
}
