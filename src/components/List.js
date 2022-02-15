import React from 'react';
import Styles from "./List.module.css";
function List({title}) {
  return (
      <div className={Styles.list__container}>
        <li>{title}</li>
  </div>
    )
}

export default List;
