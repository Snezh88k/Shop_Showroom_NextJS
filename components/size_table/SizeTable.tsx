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
  sizes?: Size[];
  className?: string;
  onClick: (size?: string | null) => void;
  sizeSelected: boolean;
}

export default function SizeTable({
  sizes,
  className,
  onClick,
  sizeSelected,
}: SizeTableProps) {
  const [isSelect, setIsSelect] = useState<string | null>();

  const clickSelect = (sizeRus: string | null, sizeInt: string | null) => {
    if (sizeInt === isSelect || sizeRus === isSelect) {
      setIsSelect("is_selected");
      onClick();
    } else {
      setIsSelect(sizeInt || sizeRus);
      onClick(`${sizeInt ? sizeInt : ""} ${sizeRus ? sizeRus : ""}`);
    }
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <h4>Размер</h4>
      <div className={styles.sizes}>
        {sizes?.map((size, index) => (
          <Size
            rus={size.rus}
            int={size.int}
            availability={size.availability}
            select={
              size.rus === isSelect || size.int === isSelect ? true : false
            }
            onClick={() => clickSelect(size.rus, size.int)}
            key={index}
          />
        ))}
      </div>
      <div
        className={styles.warning_size}
        style={sizeSelected ? { display: "block" } : { display: "none" }}
      >
        Выберите размер
      </div>
    </div>
  );
}
