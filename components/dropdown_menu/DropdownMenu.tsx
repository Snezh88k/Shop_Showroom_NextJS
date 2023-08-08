
import styles from "./DropdownMenu.module.scss";
import clsx from "clsx";
import { Inter } from "next/font/google";
import {CatalogCategoryLan} from "../catalog_category/client";

const inter = Inter({ subsets: ["latin"] });
interface DropdownMenuProps {
  className?: string;
  visible: boolean;
  t: any;
  lng: string;
}

export default function DropdownMenu({
  className,
  visible,
  t,
  lng
}: DropdownMenuProps) {
  return (
    <div
      className={clsx(styles.wrapper, inter.className, className)}
      style={visible ? { display: "block" } : { display: "none" }}
    >
      <ul className={styles.list}>
      <CatalogCategoryLan  lng={lng}/>
      </ul>
    </div>
  );
}
