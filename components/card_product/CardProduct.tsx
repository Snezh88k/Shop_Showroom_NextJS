import React from "react";
import styles from "./CardProduct.module.scss";
import Image from "next/image";

interface CardProductProps {
  id: string;
  src: string;
  alt: string;
  price: number;
  category: string;
}

export default function CardProduct({
  id,
  src,
  alt,
  price,
  category,
}: CardProductProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_wrapper}>
        <Image
          src={src}
          alt={alt}
          className={styles.product_image}
          width={300}
          height={350}
          quality={100}
        />
      </div>

      <div className={styles.description}>
        <span className={styles.price}>{price} ₾</span>
        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
}
