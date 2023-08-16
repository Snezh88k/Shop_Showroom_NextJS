"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import LikeIcon from "../../public/icons/LikeIcon";
import styles from "./Like.module.scss";
import clsx from "clsx";
import { addFavorite, removeFavorite } from "@/redux/slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

interface LikeProps {
  className?: string;
  id: string;
}

export default function Like({ className, id }: LikeProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites.items);
  const [isActive, setIsActive] = useState(false);

  const isFavorites = favorites.find((product: any) => product.id === id);

  useEffect(() => {
    if (isFavorites) setIsActive(true);
    else setIsActive(false);
  }, [favorites]);

  const addInFavoriteList: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    const order = {
      id: id,
    };

    if (isFavorites) dispatch(removeFavorite(order));
    else dispatch(addFavorite(order));
  };

  return (
    <div
      className={clsx(
        styles.wrapper,
        className,
        isActive ? styles.isActive : ""
      )}
      onClick={addInFavoriteList}
    >
      <LikeIcon />
    </div>
  );
}
