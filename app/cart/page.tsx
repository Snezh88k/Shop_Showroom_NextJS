import React from "react";
import styles from "./page.module.scss";
import ShoppingBag from "@/public/menu_icon/shopping_bag";
import InformationСard from "@/components/information_card/InformationСard";
import TruckIcon from "@/public/icons/TruckIcon";
import BankIcon from "@/public/icons/BankIcon";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.empty_cart}>
        <ShoppingBag className={styles.bag_icon} />
        <h3>ваша корзина пуста</h3>
        <span>
          используйте поиск либо навигацию сверху чтобы найти нужный товар
        </span>
      </div>

      <div className={styles.info_card_wrapper}>
        <InformationСard
          title="Бесплатная доставка"
          description="По всей территории РФ и РБ"
          icon={<TruckIcon fill="black" />}
        />
        <InformationСard
          title="Оплата разными способами"
          description="Картой, наличными и так далее"
          icon={<BankIcon />}
        />
        <InformationСard
          title="Политика возврата"
          description="Верните товар в течении 14 дней"
          icon={<TruckIcon fill="black" />}
        />
      </div>
    </div>
  );
}
