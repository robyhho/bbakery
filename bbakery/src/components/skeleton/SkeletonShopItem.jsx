import React from "react";
import "../../App.css";
import styles from "./skeletonShopItem.module.css";

const SkeletonShopItem = () => {
  return (
    <section className={styles.shopItemContainer}>
      <span className={styles.shopItemSquare}></span>
      <div className={styles.shopBottomContainer}>
        <h2 className={styles.shopItemTitle}>
          <div className="skeleton skeletonText"></div>
        </h2>
        <h2 className={styles.shopItemPrice}>
          <div className="skeleton skeletonText"></div>
        </h2>
      </div>
    </section>
  );
};

export default SkeletonShopItem;
