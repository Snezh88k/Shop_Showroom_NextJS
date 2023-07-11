"use client";

import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  children: any;
  onClick: () => void;
  className?: string;
}
export default function Button({
  text,
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button className={clsx(styles.wrapper, className)} onClick={onClick}>
      {children}
      <span className={styles.title}>{text}</span>
    </button>
  );
}
