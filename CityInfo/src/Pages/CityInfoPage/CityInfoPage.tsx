import React from "react";
import { ItemImgContainer } from "../../components/ItemImgContainer/ItemImgContainer";
import { ItemInfo } from "../../components/itemInfo/ItemInfo";
import CityImg from "../../img/izhevsk.jpg";

import styles from "./CityInfoPage.module.css";

export const CityInfoPage: React.FC = () => {
  return (
    <div className={styles.MainContainer}>
      <ItemImgContainer img={CityImg} name="Ижевск" />
      <div>
        <ItemInfo title="Название города:" value="Ижевск" />
        <ItemInfo title="Страна:" value="Россия" />
        <ItemInfo title="Субъект Федерации:" value="Удмуртия" />
        <ItemInfo title="Глава города:" value="Олег Бекмеметьев" />
        <ItemInfo title="Основан:" value="1760 г." />
        <ItemInfo title="Население:" value="646 т. чел." />
      </div>
    </div>
  );
};
