import React from "react";
import styles from "./FavoriteAlbumItem.module.css";

interface FavoriteAlbumItemProps {
  poster: string;
  name: string;
  artist: string;
  year: string;
  producer: string;
  about: string;
}

export const FavoriteAlbumItem: React.FC<FavoriteAlbumItemProps> = ({
  poster,
  name,
  artist,
  year,
  producer,
  about,
}) => {
  return (
    <div className={styles.Container}>
      <figure>
        <img src={poster} alt={name} className={styles.Poster} />
      </figure>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoItemContainer}>
          <span className={styles.InfoItemDescription}>Название</span>
          <span className={styles.InfoItemValue}>{name}</span>
        </div>
        <div className={styles.InfoItemContainer}>
          <span className={styles.InfoItemDescription}>Исполнитель</span>
          <span className={styles.InfoItemValue}>{artist}</span>
        </div>
        <div className={styles.InfoItemContainer}>
          <span className={styles.InfoItemDescription}>Дата выпуска</span>
          <span className={styles.InfoItemValue}>{year}</span>
        </div>
        <div className={styles.InfoItemContainer}>
          <span className={styles.InfoItemDescription}>Студия записи</span>
          <span className={styles.InfoItemValue}>{producer}</span>
        </div>
        <div className={styles.AboutContainer}>
          <span className={styles.InfoItemDescription}>
            Краткая информация:
          </span>
          <span className={styles.InfoAboutContent}>{about}</span>
        </div>
      </div>
    </div>
  );
};
