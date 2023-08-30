"use client";

import React from "react";
import styles from "./CardProductInCart.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeItem } from "@/redux/slices/cartSlice";
import Link from "next/link";
import DeleteIcon from "@/public/icons/DeleteIcon";

interface CardProductInCartProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    size: string;
    numberSize: any;
    url: string;
  };

  lng: string;
  t: any;
}

export default function CardProductInCart({
  product,
  lng,
  t,
}: CardProductInCartProps) {
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
                <span>{t("size")}: </span>
                <span className={styles.size}>{product.size}</span>
              </div>
              <div className={styles.article_wrapper}>
                <span>{t("article")}: </span>
                <span className={styles.article}>{product.id}</span>
              </div>
            </div>
          </div>
          <div className={styles.total}>
            <span className={styles.price}>{product.price} ₾</span>
            <span className={styles.delete} onClick={removeProduct}>
              <DeleteIcon />
            </span>
          </div>
        </div>
      }
    </>
  );
}
