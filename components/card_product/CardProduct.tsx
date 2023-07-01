import React from "react";
import styles from "./CardProduct.module.scss";
import Image from "next/image";

interface CardProductProps {
  src: string;
  height?: number;
  alt: string;
  price: number;
  category: string;
}

export default function CardProduct({
  src,
  height = 350,
  alt,
  price,
  category,
}: CardProductProps) {
  const priceString = price.toString();
  const priceLength = priceString.length - 3;
  const priceEdited = `${priceString.slice(0, priceLength)} ${priceString.slice(
    priceLength
  )}`;
  return (
    <div className={styles.wrapper}>
      <Image src={src} width={300} height={height} alt={alt} />
      <div className={styles.description}>
        <span className={styles.price}>{priceEdited} ₽</span>
        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
}
