import Link from "next/link";
import styles from "./DropdownMenu.module.scss";
import clsx from "clsx";

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
      className={clsx(styles.wrapper, className)}
      style={visible ? { display: "block" } : { display: "none" }}
    >
      <ul className={styles.list}>
        <li>
          <Link href="/">Показать все</Link>
        </li>
        <li>
          <Link href="/">Топы и рубашки</Link>
        </li>
        <li>
          <Link href="/">Платья и юбки</Link>
        </li>
        <li>
          <Link href="/">Брюки и джинсы</Link>
        </li>
        <li>
          <Link href="/">Костюмы и комплекты</Link>
        </li>
      </ul>
    </div>
  );
}
