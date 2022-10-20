import React from "react";
import styles from "./success.module.css";
const Success = () => {
  return (
    <>
      <header>
        <h1 className={styles.logo}>Dantat</h1>
      </header>
      <main className={styles.main}>
        <h2>Your order has been confirmed and will be shipping soon!</h2>
        <section className={styles.orderMeta}>
          <article className={styles.orderDeets}>
            <p className={styles.detailTitle}>Order Date</p>
            <p className={styles.detailvalue}>28 November 2022</p>
          </article>
          <div className={styles.orderDeets}>
            <p className={styles.detailTitle}>Order Number</p>
            <p className={styles.detailvalue}>UK714922</p>
          </div>
          <div className={styles.orderDeets}>
            <p className={styles.detailTitle}>Payment Method</p>
            <p className={styles.detailvalue}>Visa - *****5090</p>
          </div>
          <div className={styles.orderDeets}>
            <p className={styles.detailTitle}>Address</p>
            <p className={styles.detailvalue}>27, Grove Road</p>
          </div>
        </section>
        <section className={styles.orderItems}>
          <div className={styles.item}>
            <img src="" alt="" />
            <h2 className={styles.itemName}></h2>
            <h2 className={styles.itemQty}></h2>
            <h2 className={styles.itemTotal}></h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Success;
