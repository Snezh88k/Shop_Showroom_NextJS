import React from "react";
import clsx from "clsx";

import styles from "./SizeTable.module.scss";

import Size from "../size/Size";

type Size = {
  rus: string;
  int: string;
};

interface SizeTableProps {
  sizes: Size[];
  className?: string;
}

export default function SizeTable({ sizes, className }: SizeTableProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <h4>Размеры</h4>
      <div className={styles.sizes}>
        {sizes.map((size) => (
          <Size rus={size.rus} int={size.int} />
        ))}
      </div>
    </div>
  );
}
