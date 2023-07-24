import React from "react";
import styles from "./page.module.scss";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div
        className={"elfsight-app-816bcfef-8c28-49ef-9fed-c4f85e62bc9d"}
      ></div>
    </div>
  );
}
