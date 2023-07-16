import React from "react";
import styles from "./CardProductInCart.module.scss";
import Image from "next/image";

interface CardProductInCartProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    sale: boolean;
    compound: any;
    size: any;
    images: {
      main: string;
      other: string[];
    };
  };
  selectSize: number;
}

export default function CardProductInCart({
  product,
  selectSize,
}: CardProductInCartProps) {
  console.log(
    product,
    selectSize,
    product.size[selectSize].rus,
    product.size[selectSize].int
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.description_wrapper}>
        <Image
          src={product.images.main}
          alt={product.images.main}
          className={styles.product_image}
          width={100}
          height={100}
          fill={false}
        />
        <div className={styles.info}>
          <span className={styles.name}>{product.name}</span>
          <div className={styles.size_wrapper}>
            <span>Размер:</span>
            <span className={styles.size}>{product.size[selectSize].int}</span>
            <span className={styles.size}>{product.size[selectSize].rus}</span>
          </div>
        </div>
      </div>
      <div className={styles.total}>
        <span className={styles.price}>{product.price} ₾</span>
        <span className={styles.delete}>удалить</span>
      </div>
    </div>
  );
}
