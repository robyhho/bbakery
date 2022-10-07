import React from "react";
import styles from "./semiCircle.module.css";

const SemiCircle = () => {
  return (
    <div className={styles.semiCircContainer}>
      <div className={styles.semiCircle}></div>
      <div className={styles.semiCircle}></div>
      <div className={styles.semiCircle}></div>
      <div className={styles.semiCircle}></div>
      <div className={styles.semiCircle}></div>
      <div className={styles.semiCircle}></div>
    </div>
  );
};

export default SemiCircle;
