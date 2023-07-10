import React from "react";
import styles from "./CardProduct.module.scss";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  id: string;
  src: string;
  height?: number;
  alt: string;
  price: number;
  category: string;
}

export default function CardProduct({
  id,
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
      <Link href={`catalog/${id}`}>
        <div className={styles.image_wrapper}>
          <Image
            src={src}
            width={300}
            height={height}
            alt={alt}
            className={styles.product_image}
          />
        </div>

        <div className={styles.description}>
          <span className={styles.price}>{price} ₾</span>
          <span className={styles.category}>{category}</span>
        </div>
      </Link>
    </div>
  );
}
