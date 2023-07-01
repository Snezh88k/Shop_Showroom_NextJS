import React from "react";
import clsx from "clsx";

import styles from "./CardCategory.module.scss";
import Image from "next/image";

interface CardCategoryProps {
  className?: string;
  photo: string;
  alt: string;
  description: string;
}

export default function CardCategory({
  className,
  photo,
  alt,
  description,
}: CardCategoryProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Image
        src={photo}
        alt={alt}
        width={238}
        height={126}
        style={{ objectFit: "cover", borderRadius: "20px" }}
      />
      <h3>{description}</h3>
    </div>
  );
}
