"use client";

import React, { useState } from "react";
import clsx from "clsx";

import styles from "./SizeTable.module.scss";

import Size from "../size/Size";

type Size = {
  rus: string | null;
  int: string | null;
  availability: boolean;
};

interface SizeTableProps {
  sizes: Size[];
  className?: string;
}

export default function SizeTable({ sizes, className }: SizeTableProps) {
  const [isSelect, setIsSelect] = useState<number>();

  const clickSelect = (index: number) => {
    if (index === isSelect) {
      setIsSelect(99);
    } else {
      setIsSelect(index);
    }
  };
  return (
    <div className={clsx(styles.wrapper, className)}>
      <h4>Размеры</h4>
      <div className={styles.sizes}>
        {sizes?.map((size, index) => (
          <Size
            rus={size.rus}
            int={size.int}
            availability={size.availability}
            select={index === isSelect ? true : false}
            onClick={() => clickSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}
