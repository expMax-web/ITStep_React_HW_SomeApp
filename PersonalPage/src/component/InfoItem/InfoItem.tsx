import React from "react";
import styles from "./InfoItem.module.css";

interface InfoItemProps {
  description: string;
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export const InfoItem: React.FC<InfoItemProps> = ({
  description,
  value,
  setState,
}) => {
  const HandleChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState(event.target.value);
  };
  return (
    <div className={styles.InfoItemContainer}>
      <label className={styles.InfoItemDescription}>{description}:</label>
      <input
        className={styles.Input}
        value={value}
        onChange={HandleChanged}
      ></input>
    </div>
  );
};
