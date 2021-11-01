import React from "react";
import "./ItemInfo.css";

export const ItemInfo = ({ title, value }) => {
  return (
    <div className="ItemContainer">
      <p className="titleItem">{title}</p>
      <p className="titleValue">{value}</p>
    </div>
  );
};
