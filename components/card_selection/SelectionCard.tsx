import React from "react";
import Image from "next/image";

import styles from "./SelectionCard.module.scss";

interface SelectionCardProps {
  src: string;
  alt: string;
  category: string;
  description: string;
}

export default function SelectionCard({
  src,
  alt,
  category,
  description,
}: SelectionCardProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={src}
        alt={alt}
        width={238}
        height={238}
        style={{ objectFit: "cover", borderRadius: "20px" }}
      />
      <div>
        <span className={styles.category}>{category}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
}
