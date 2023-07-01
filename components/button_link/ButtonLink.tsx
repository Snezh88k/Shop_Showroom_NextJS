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
  return (
    <div className={className}>
      <Link href={link}>
        <button type="button" className={styles.wrapper}>
          {text} <ArrowRight className={styles.arrowWrapper} />
        </button>
      </Link>
    </div>
  );
}
