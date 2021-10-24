import React, { useState } from "react";
import { InfoItem } from "../../component/InfoItem/InfoItem";
import { InfoItemAbout } from "../../component/InfoItemAbout/InfoItemAbout";
import { Poster } from "../../component/Poster/Poster";
import { DEFAULT_VALUE } from "./DefaultValue";

import styles from "./PersonalPage.module.css";

interface PersonalPageProps {
  poster: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  about: string;
}

export const PersonalPage: React.FC<PersonalPageProps> = () => {
  const [name, setName] = useState(DEFAULT_VALUE.name);
  const [status, setStatus] = useState(DEFAULT_VALUE.status);
  const [species, setSpecies] = useState(DEFAULT_VALUE.species);
  const [gender, setGender] = useState(DEFAULT_VALUE.gender);

  const [about, setAbout] = useState(DEFAULT_VALUE.about);

  const ResetChange = () => {
    setName(DEFAULT_VALUE.name);
    setStatus(DEFAULT_VALUE.status);
    setSpecies(DEFAULT_VALUE.species);
    setGender(DEFAULT_VALUE.gender);
    setAbout(DEFAULT_VALUE.about);
  };
  return (
    <div className={styles.Container}>
      <Poster name={name} poster={DEFAULT_VALUE.poster} />
      <div className={styles.InfoContainer}>
        <InfoItem description="Name" value={name} setState={setName} />
        <InfoItem description="Status" value={status} setState={setStatus} />
        <InfoItem description="Species" value={species} setState={setSpecies} />
        <InfoItem description="Gender" value={gender} setState={setGender} />
      </div>
      <InfoItemAbout description="About me" value={about} setState={setAbout} />
      <button onClick={ResetChange} className={styles.ResetButton}>
        Reset to Default
      </button>
    </div>
  );
};
