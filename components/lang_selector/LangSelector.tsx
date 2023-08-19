"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./LangSelector.module.scss";
import { Trans } from "react-i18next";
import { languages } from "@/app/i18n/settings";
import Link from "next/link";

import { useClickAway } from "react-use";

export default function LangSelector({ t, lng }: { t: any; lng: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLangSwith = () => {
    setIsOpen(!isOpen);
  };

  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className={styles.wrapper} ref={ref}>
      <Trans i18nKey="languageSwitcher" t={t}>
        <strong className={styles.select_lang} onClick={openLangSwith}>
          {lng}
          <span
            className={styles.arrow}
            style={isOpen ? { transform: " rotate(90deg)" } : {}}
          ></span>
        </strong>
      </Trans>
      <div
        style={isOpen ? { display: "flex" } : { display: "none" }}
        className={styles.list}
      >
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0}
                <Link
                  href={`/${l}/`}
                  style={{ textTransform: "uppercase", zIndex: "10" }}
                >
                  {l}
                </Link>
              </span>
            );
          })}
      </div>
    </div>
  );
}
