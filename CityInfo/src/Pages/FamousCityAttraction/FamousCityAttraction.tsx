import React from "react";

import { ItemImgContainer } from "../../components/ItemImgContainer/ItemImgContainer";
import { ItemInfo } from "../../components/itemInfo/ItemInfo";
import ZooImg from "../../img/1280px-Izhevsk_Zoo.jpg";

import styles from "./FamousCityAttraction.module.css";

export const FamousCityAttraction: React.FC = () => {
  return (
    <div className={styles.MainContainer}>
      <ItemImgContainer img={ZooImg} name="Ижевский зоопарк" />
      <div>
        <ItemInfo title="Основан:" value="10 сентября 2008" />
        <ItemInfo title="Площадь:" value="16 га" />
        <ItemInfo title="Животных:" value="более 700" />
        <ItemInfo title="Видов:" value="более 210" />
        <ItemInfo title="Число посетителей в год:" value="около 600 000" />
        <ItemInfo title="Веб-сайт:" value="udm-zoo.ru" />
      </div>
    </div>
  );
};
