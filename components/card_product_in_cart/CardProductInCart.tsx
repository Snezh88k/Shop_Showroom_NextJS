import React, { useEffect, useState } from "react";
import styles from "./CardProductInCart.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeItem } from "@/redux/slices/cartSlice";
import Link from "next/link";
interface CardProductInCartProps {
  // product: {
  //   id: string;
  //   name: string;
  //   category: string;
  //   price: number;
  //   description: string;
  //   sale: boolean;
  //   compound: any;
  //   size: any;
  //   images: {
  //     main: string;
  //     other: string[];
  //   };
  // };
  // selectSize: number;

  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    size: string;
    numberSize: any;
    url: string;
  };
}

export default function CardProductInCart({ product }: CardProductInCartProps) {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(removeItem(product));
  };

  return (
    <>
      {
        <div className={styles.wrapper}>
          <div className={styles.description_wrapper}>
            <Link href={product.url}>
              <Image
                src={product.image}
                alt={product.id}
                className={styles.product_image}
                width={100}
                height={100}
                fill={false}
              />
            </Link>
            <div className={styles.info}>
              <span className={styles.name}>{product.name}</span>
              <div className={styles.size_wrapper}>
                <span>Размер:</span>
                <span className={styles.size}>{product.size}</span>
              </div>
            </div>
          </div>
          <div className={styles.total}>
            <span className={styles.price}>{product.price} ₾</span>
            <span className={styles.delete} onClick={removeProduct}>
              удалить
            </span>
          </div>
        </div>
      }
    </>
  );
}
