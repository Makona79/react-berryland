import React from "react";
import styles from "./NotFoundBlock.module.scss";


const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>NotFound</h1>
      <p className={styles.descr}>К сожалению, данная страница отсутствует</p>
    </div>
  );
};

export default NotFoundBlock;
