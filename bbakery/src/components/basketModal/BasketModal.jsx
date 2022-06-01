import styles from "./basketModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BasketItem from "../basketItem/BasketItem";

const BasketModal = () => {
  return (
    <>
      <section className={styles.checkoutBasketModal}>
        <div className={styles.basketModalTop}>
          <FontAwesomeIcon
            className={styles.arrowLeft}
            icon={faArrowLeft}
          ></FontAwesomeIcon>
          <h1 className={styles.basketModalTitle}>Basket Contents</h1>
        </div>
        <BasketItem></BasketItem>
        <BasketItem></BasketItem>
        <BasketItem></BasketItem>
      </section>
    </>
  );
};

export default BasketModal;
