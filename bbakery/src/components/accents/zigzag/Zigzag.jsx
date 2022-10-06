import React from "react";
import styles from "./zigzag.module.css";
const Zigzag = () => {
  return (
    <>
      <div className={styles.zigContainer}>
        <div className={styles.zig1}></div>
        <div className={styles.zig2}></div>
      </div>
    </>
  );
};

export default Zigzag;
