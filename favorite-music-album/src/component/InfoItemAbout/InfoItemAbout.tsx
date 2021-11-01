import React from "react";
import styles from "./InfoItemAbout.module.css";

interface InfoItemAboutProps {
  description: string;
  value: string;
}

export const InfoItemAbout: React.FC<InfoItemAboutProps> = ({
  description,
  value,
}) => {
  return (
    <div className={styles.AboutContainer}>
      <span className={styles.InfoItemDescription}>{description}:</span>
      <span className={styles.InfoAboutContent}>{value}</span>
    </div>
  );
};
