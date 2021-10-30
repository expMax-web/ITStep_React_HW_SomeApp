import React from "react";
import { Form } from "../../components/form/Form";

import { ItemImgContainer } from "../../components/ItemImgContainer/ItemImgContainer";
import img1 from "../../img/gallery/1.jpg";
import img2 from "../../img/gallery/2.jpg";
import img3 from "../../img/gallery/3.jpg";
import img4 from "../../img/gallery/4.jpg";
import img5 from "../../img/gallery/5.jpg";
import img6 from "../../img/gallery/6.jpg";

import styles from "./CityGallery.module.css";

export const CityGallery: React.FC = () => {
  return (
    <div className={styles.MainContainer}>
      <ItemImgContainer img={img1} />
      <ItemImgContainer img={img2} />
      <ItemImgContainer img={img3} />
      <ItemImgContainer img={img4} />
      <ItemImgContainer img={img5} />
      <ItemImgContainer img={img6} />
      <div className={styles.FormContainer}>
        <Form />
      </div>
    </div>
  );
};
