import React from "react";

import poster from "./Meteora.jpg";

import styles from "./Poster.module.css";

interface PosterProps {
  name: string;
}

export const Poster: React.FC<PosterProps> = ({ name }) => {
  return (
    <figure>
      <img src={poster} alt={name} className={styles.Poster} />
    </figure>
  );
};
