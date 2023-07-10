"use client";

import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  children: any;
  className?: string;
}
export default function Button({ text, children, className }: ButtonProps) {
  return (
    <button className={clsx(styles.wrapper, className)}>
      {children}
      <span className={styles.title}>{text}</span>
    </button>
  );
}
