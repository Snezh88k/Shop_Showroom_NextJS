import React from "react";
import styles from "./InformationСard.module.scss";
import Image from "next/image";

import TruckIcon from "../../public/icons/TruckIcon";

interface InformationСardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}
export default function InformationСard({
  title,
  description,
  icon,
}: InformationСardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        {icon}
        <div className={styles.text}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </div>
  );
}
