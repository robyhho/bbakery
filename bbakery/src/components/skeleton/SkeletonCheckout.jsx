import React from "react";
import "../../App.css";
import Navbar from "../navbar/Navbar";
import styles from "./skeletonCheckout.module.css";
const SkeletonCheckout = () => {
  return (
    <>
      <div className={styles.checkoutContainer}>
        <section className={styles.skeletonContainer}>
          <div className="skeleton skeletonTitle"></div>
          <div className="skeleton skeletonTextLong"></div>
          <div className="skeleton skeletonTextLong"></div>
          <div className="skeleton skeletonTextLong"></div>
        </section>
        <section className={styles.skeletonContainer}>
          <div className="skeleton skeletonTitle"></div>
          <div className="skeleton skeletonTextLong"></div>
          <div className="skeleton skeletonTextLong"></div>
          <div className="skeleton skeletonTextLong"></div>
        </section>{" "}
        <section className={styles.skeletonContainer}>
          <div className="skeleton skeletonTitle"></div>
          <div className="skeleton skeletonTextLong"></div>
          <div className="skeleton skeletonTextLong"></div>
          <div className="skeleton skeletonTextLong"></div>
        </section>
      </div>
    </>
  );
};

export default SkeletonCheckout;
