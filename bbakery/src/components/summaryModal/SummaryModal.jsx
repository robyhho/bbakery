import styles from "./summaryModal.module.css";

const SummaryModal = () => {
  return (
    <section className={styles.summaryContainer}>
      <h1 className={styles.title}>Summary</h1>
      <hr />
      <div className={styles.subContainer}>
        <h2 className={styles.text}>Subtotal</h2>
        <h2 className={styles.text}>£10.85</h2>
      </div>
      <div className={styles.subContainer}>
        <h2 className={styles.text}>Delivery</h2>
        <h2 className={styles.checkoutText}>To be confirmed at checkout</h2>
      </div>
    </section>
  );
};

export default SummaryModal;
