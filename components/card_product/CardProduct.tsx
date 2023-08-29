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
        <Image src={src} alt={alt} width={330} height={440} quality={100} />
      </div>

      <div className={styles.description}>
        <div style={{ display: "flex" }}>
          <span className={clsx(styles.price, salePrice ? styles.through : "")}>
            {price}{" "}
            <span
              style={salePrice ? { display: "none" } : { marginLeft: "2px" }}
            >
              ₾
            </span>
          </span>
          <span className={styles.price_sale}>
            {salePrice}
            <span style={{ marginLeft: "2px" }}>₾</span>
          </span>
        </div>

        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
}
