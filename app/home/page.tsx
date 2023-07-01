import React from "react";
import styles from "./home.module.scss";

export default function page() {
  return (
    <div>
      <div className={styles.new}>
        <div className={styles.this_month}> A </div>
        <div className={styles.promo}> B </div>
        <div className={styles.collection_one}> C </div>
        <div className={styles.collection_two}> C </div>
      </div>
    </div>
  );
}
