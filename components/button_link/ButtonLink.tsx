import Link from "next/link";
import React from "react";

import styles from "./ButtonLink.module.scss";
import arrowIcon from "../../public/icons/arrow.svg";
import Image from "next/image";
import clsx from "clsx";

interface ButtonLinkProps {
  link: string;
  text: string;
  className?: string;
}

export default function ButtonLink({ link, text, className }: ButtonLinkProps) {
  return (
    <Link href={link}>
      <button type="button" className={clsx(styles.wrapper, className)}>
        {text} <Image src={arrowIcon} alt="" />
      </button>
    </Link>
  );
}
