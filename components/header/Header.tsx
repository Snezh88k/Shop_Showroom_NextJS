import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

import findIcon from "../../public/menu_icon/search.png";
import heartsIcon from "../../public/menu_icon/hearts.png";
import bagIcon from "../../public/menu_icon/shopping-bag.png";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_line}>
        <Link href="/">
          <div>LOGO</div>
        </Link>

        <div className={styles.quick_panel}>
          <span>
            <Image src={findIcon} alt="find" />
          </span>
          <span>
            <Image src={heartsIcon} alt="hearts" />
          </span>
          <span>
            <Image src={bagIcon} alt="bag" />
          </span>
        </div>
      </div>
      <nav>
        <ul className={styles.main_menu}>
          <li>
            <Link href="/about">новинки</Link>
          </li>
          <li>
            <Link href="/">одежда</Link>
          </li>
          <li>
            <Link href="/">обувь</Link>
          </li>
          <li>
            <Link href="/">сумки</Link>
          </li>
          <li>
            <Link href="/">аксуссуары</Link>
          </li>
          <li>
            <Link href="/">спорт</Link>
          </li>
          <li>
            <Link href="/">бренды</Link>
          </li>
          <li>
            <Link href="/">новости</Link>
          </li>
          <li>
            <Link href="/">скидки</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
