import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

import findIcon from "../../public/menu_icon/search.svg";
import heartsIcon from "../../public/menu_icon/hearts.svg";
import bagIcon from "../../public/menu_icon/shopping_bag.svg";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_line}>
        <Link href="/">
          <div className={styles.logo}>I AM</div>
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
            <Link href="/">каталог</Link>
          </li>
          <li>
            <Link href="/">оплата</Link>
          </li>
          <li>
            <Link href="/">доставка</Link>
          </li>
          <li>
            <Link href="/">акции</Link>
          </li>
          <li>
            <Link href="/">instagram</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
