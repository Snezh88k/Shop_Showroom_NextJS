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

      <Image
        src={src}
        alt={alt}
        className={styles.product_image}
        fill
        quality={100}
      />

      <div className={styles.description}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
          <span className={clsx(styles.price, salePrice ? styles.through : "")}>
            {price}
            <span
              style={salePrice ? { display: "none" } : { display: "block" }}
              className={styles.currency}
            >
              ₾
            </span>
          </span>
          {salePrice ? (
            <span className={styles.price_sale}>
              {salePrice}
              <span className={styles.currency}>₾</span>
            </span>
          ) : (
            ""
          )}
        </div>

        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
}
