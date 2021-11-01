import React from "react";
import { useParams } from "react-router-dom";

import { ItemImgContainer } from "../../components/ItemImgContainer/ItemImgContainer";
import ZooImg from "../../img/1280px-Izhevsk_Zoo.jpg";
import DruzbaNarodov from "../../img/2.jpg";
import IzhevskGunsmiths from "../../img/IzhevskGunsmiths.jpg";
import MikhailovskayaColumn from "../../img/1920px-Aerial_photographs_of_Izhevsk-45.jpg";
import Circus from "../../img/CIRCUS.jpg";
import Cathedral from "../../img/639012.jpg";

import styles from "./CityAttractions.module.css";

export const CityAttractions: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className={styles.MainContainer}>
      <ItemImgContainer
        img={ZooImg}
        name="Ижевский зоопарк"
        id="1"
        paramId={id}
      />
      <ItemImgContainer
        img={DruzbaNarodov}
        name="Монумент «Дружба народов»"
        id="2"
        paramId={id}
      />
      <ItemImgContainer
        img={IzhevskGunsmiths}
        name="Памятник ижевским оружейникам"
        id="3"
        paramId={id}
      />
      <ItemImgContainer
        img={MikhailovskayaColumn}
        name="Михайловская колонна"
        id="4"
        paramId={id}
      />
      <ItemImgContainer
        img={Circus}
        name="Государственный цирк Удмуртии"
        id="5"
        paramId={id}
      />
      <ItemImgContainer
        img={Cathedral}
        name="Кафедральный собор Архангела Михаила"
        id="6"
        paramId={id}
      />
    </div>
  );
};
