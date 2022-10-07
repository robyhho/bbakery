import React from "react";
import styles from "./triangleLine.module.css";
const TriangleLine = () => {
  return (
    <>
      <div className={styles.triangle}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </>
  );
};

export default TriangleLine;
