import Link from "next/link";
import styles from "./DropdownMenu.module.scss";
import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface DropdownMenuProps {
  className?: string;
  visible: boolean;
}

export default function DropdownMenu({
  className,
  visible,
}: DropdownMenuProps) {
  return (
    <div
      className={clsx(styles.wrapper, inter.className, className)}
      style={visible ? { display: "block" } : { display: "none" }}
    >
      <ul className={styles.list}>
        <li>
          <Link href="/">Показать все</Link>
        </li>
        <li>
          <Link href="/catalog/tops_shirts">Топы и рубашки</Link>
        </li>
        <li>
          <Link href="/catalog/dresses_skirts">Платья и юбки</Link>
        </li>
        <li>
          <Link href="/catalog/pants_jeans">Брюки и джинсы</Link>
        </li>
        <li>
          <Link href="/catalog/suits_sets">Костюмы и комплекты</Link>
        </li>
      </ul>
    </div>
  );
}
