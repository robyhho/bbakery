import styles from "./checkoutPromotion.module.css";

const CheckoutPromotion = () => {
  return (
    <section className={styles.promotionContainer}>
      <h1 className={styles.title}>Promotion Code</h1>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} />
        <button className={styles.button}>Apply</button>
      </div>
    </section>
  );
};

export default CheckoutPromotion;
