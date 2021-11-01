import React from "react";
import styles from "./ItemInfo.module.css";

interface ItemInfoProps {
  title: string | null;
  value: string | null;
}

export const ItemInfo: React.FC<ItemInfoProps> = ({ title, value }) => {
  return (
    <div className={styles.ItemContainer}>
      <p className={styles.titleItem}>{title}</p>
      <p className={styles.titleValue}>{value}</p>
    </div>
  );
};
