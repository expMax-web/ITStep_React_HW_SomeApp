import React from "react";
import cn from "classnames";

import styles from "./ItemImgContainer.module.scss";

interface ItemImgContainer {
  img?: string;
  name?: string;
  id?: string;
  paramId?: string;
}

export const ItemImgContainer: React.FC<ItemImgContainer> = ({
  img,
  name,
  id,
  paramId,
}) => {
  let param = false;

  if (id == paramId) {
    param = true;
  }
  console.log(param);

  return (
    <figure>
      <div className={styles.ImgContainer}>
        <img src={img} alt={name} className={styles.Img}></img>
      </div>
      <figcaption
        className={cn(styles.ImgDescription, {
          [styles.ImgDescription_Green]: param,
        })}
      >
        {name}
      </figcaption>
    </figure>
  );
};
