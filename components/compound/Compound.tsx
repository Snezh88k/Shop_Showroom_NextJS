import React from "react";
import clsx from "clsx";

import styles from "./Compound.module.scss";

type Property = {
  [key: string]: string | undefined;
};

interface CompoundProps {
  compound: Property[];
  className?: string;
}

export default function Compound({ compound, className }: CompoundProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.compound}>
        {compound.map((property, index) => {
          for (let key in property) {
            return (
              <div key={index}>
                <span className={styles.property}>{key}</span>
                <span className={styles.property_dots}>
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                </span>
                <span className={styles.value}>{property[key]}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
