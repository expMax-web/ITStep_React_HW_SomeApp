import React from "react";
import { InfoItem } from "../../component/InfoItem/InfoItem";
import { InfoItemAbout } from "../../component/InfoItemAbout/InfoItemAbout";
import { Poster } from "../../component/Poster/Poster";
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
      <Poster name={name} poster={poster} />
      <div className={styles.InfoContainer}>
        <InfoItem description="Name" value={name} />
        <InfoItem description="Status" value={status} />
        <InfoItem description="Species" value={species} />
        <InfoItem description="Gender" value={gender} />
      </div>
      <InfoItemAbout description="About me" value={about} />
    </div>
  );
};
