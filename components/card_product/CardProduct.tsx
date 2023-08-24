import React from "react";
import styles from "./CardProduct.module.scss";
import Image from "next/image";
import Like from "../like/Like";
import clsx from "clsx";

interface CardProductProps {
  id: string;
  src: string;
  alt: string;
  price: number;
  category: string;
  lng: string;
  t: any;
  salePrice: number;
}

export default function CardProduct({
  id,
  src,
  alt,
  price,
  category,
  lng,
  t,
  salePrice,
}: CardProductProps) {
  return (
    <div className={styles.wrapper}>
      <Like className={styles.like} id={id} />
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
        <span className={styles.price_sale}>{salePrice} ₾</span>

        <span className={clsx(styles.price, salePrice ? styles.through : "")}>
          {price} ₾
        </span>
        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
}
