import React from "react";

import { InfoItem } from "../InfoItem/InfoItem";
import { InfoItemAbout } from "../InfoItemAbout/InfoItemAbout";
import { Poster } from "../Poster/Poster";

import styles from "./FavoriteAlbumItem.module.css";

interface FavoriteAlbumItemProps {
  name: string;
  artist: string;
  year: string;
  producer: string;
  about: string;
}

export const FavoriteAlbumItem: React.FC<FavoriteAlbumItemProps> = ({
  name,
  artist,
  year,
  producer,
  about,
}) => {
  return (
    <div className={styles.Container}>
      <Poster name={name} />
      <div className={styles.InfoContainer}>
        <InfoItem description="Название" value={name} />
        <InfoItem description="Исполнитель" value={artist} />
        <InfoItem description="Дата выпуска" value={year} />
        <InfoItem description="Студия записи" value={producer} />
        <InfoItemAbout description="Краткая информация" value={about} />
      </div>
    </div>
  );
};
