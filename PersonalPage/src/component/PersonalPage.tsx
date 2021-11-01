import React from "react";
import styles from "./PersonalPage.module.css";

interface PersonalPageProps {
  poster: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  about: string;
}

export const PersonalPage: React.FC<PersonalPageProps> = ({
  poster,
  name,
  status,
  species,
  gender,
  about,
}) => {
  return (
    <div className={styles.Container}>
      <figure className={styles.PosterContainer}>
        <img src={poster} alt={name} className={styles.Poster} />
      </figure>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoItemContainer}>
          <span className={styles.InfoItemDescription}>Name:</span>
          <span className={styles.InfoItemValue}>{name}</span>
        </div>
        <div className={styles.InfoItemContainer}>
          <span className={styles.InfoItemDescription}>Status:</span>
          <span className={styles.InfoItemValue}>{status}</span>
        </div>
        <div className={styles.InfoItemContainer}>
          <span className={styles.InfoItemDescription}>Species:</span>
          <span className={styles.InfoItemValue}>{species}</span>
        </div>
        <div className={styles.InfoItemContainer}>
          <span className={styles.InfoItemDescription}>Gender:</span>
          <span className={styles.InfoItemValue}>{gender}</span>
        </div>
      </div>
      <div className={styles.AboutContainer}>
        <span className={styles.InfoItemDescription}>About me:</span>
        <span className={styles.InfoAboutContent}>{about}</span>
      </div>
    </div>
  );
};
