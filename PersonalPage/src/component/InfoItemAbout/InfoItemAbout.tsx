import React from "react";
import styles from "./InfoItemAbout.module.css";

interface InfoItemAboutProps {
  description: string;
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export const InfoItemAbout: React.FC<InfoItemAboutProps> = ({
  description,
  value,
  setState,
}) => {
  const HandleChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(event.target.value);
  };

  return (
    <div className={styles.AboutContainer}>
      <label className={styles.InfoItemDescription}>{description}:</label>
      <textarea
        className={styles.TextArea}
        value={value}
        onChange={HandleChanged}
      ></textarea>
    </div>
  );
};
