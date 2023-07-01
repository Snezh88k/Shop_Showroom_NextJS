"use client";

import Link from "next/link";
import React, { useState } from "react";

import styles from "./ButtonLink.module.scss";
import { ArrowRight } from "../../public/icons/arrow_right";

interface ButtonLinkProps {
  link: string;
  text: string;
  className?: string;
}

export default function ButtonLink({ link, text, className }: ButtonLinkProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={link}>
        <button type="button" className={styles.wrapper}>
          {text}{" "}
          <ArrowRight
            style={{ fill: isHover ? "white" : "rgba(255, 255, 255, 0.5)" }}
          />
        </button>
      </Link>
    </div>
  );
}
