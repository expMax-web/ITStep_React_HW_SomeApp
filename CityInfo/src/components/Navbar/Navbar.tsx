import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.NavContainer}>
        <Link to={`/CityInfo`} className={styles.Link}>
          <li>About city</li>
        </Link>
        <Link to={`/FamousAttraction`} className={styles.Link}>
          <li>Famous city attraction</li>
        </Link>
        <Link to={`/CityAttractions`} className={styles.Link}>
          <li>City attractions</li>
        </Link>
        <Link to={`/CityGallery`} className={styles.Link}>
          <li>City gallery</li>
        </Link>
      </ul>
    </nav>
  );
};
