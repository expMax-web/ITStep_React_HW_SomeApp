import React from "react";
import styles from "./InfoItem.module.css";

interface InfoItemProps {
  description: string;
  value: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ description, value }) => {
  return (
    <div className={styles.InfoItemContainer}>
      <span className={styles.InfoItemDescription}>{description}</span>
      <span className={styles.InfoItemValue}>{value}</span>
    </div>
  );
};
