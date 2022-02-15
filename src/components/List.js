import React from "react";
import Styles from "./List.module.css";
function List({ title, icon }) {
  return (
    <div className={Styles.list__container}>
      <i className={`bx ${icon}`}></i>
      <li> {title}</li>
    </div>
  );
}

export default List;
