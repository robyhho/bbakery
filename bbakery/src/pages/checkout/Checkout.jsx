import styles from "./checkout.module.css";
import Navbar from "../../components/navbar/Navbar";

import BasketModal from "../../components/basketModal/BasketModal";
import CheckoutPromotion from "../../components/checkoutPromotion/CheckoutPromotion";
import SummaryModal from "../../components/summaryModal/SummaryModal";
const Checkout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.checkoutContainer}>
        <BasketModal></BasketModal>
        <section className={styles.checkoutPromotionModal}>
          <CheckoutPromotion></CheckoutPromotion>
        </section>
        <section className={styles.checkoutSummaryModal}>
          <SummaryModal></SummaryModal>
        </section>
        <section className={styles.checkoutButtonModal}>
          <button className={styles.button}>
            <span>Checkout</span>
            <span>£10.85</span>
          </button>
        </section>
      </div>
    </>
  );
};

export default Checkout;
