import React from "react";

import styles from "./Poster.module.css";

interface PosterProps {
  name: string;
  poster: string;
}

export const Poster: React.FC<PosterProps> = ({ name, poster }) => {
  return (
    <figure className={styles.PosterContainer}>
      <img src={poster} alt={name} className={styles.Poster} />
    </figure>
  );
};
