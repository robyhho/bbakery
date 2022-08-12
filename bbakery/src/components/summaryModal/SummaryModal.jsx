import styles from "./summaryModal.module.css";
import useFetch from "../../hooks/useFetch";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

const SummaryModal = () => {
  const { data, loading, error } = useFetch(`/products/find/`);
  const { cartItems } = useShoppingCart();

  return (
    <section className={styles.summaryContainer}>
      <h1 className={styles.title}>Summary</h1>
      <hr />
      <div className={styles.subContainer}>
        <h2 className={styles.text}>Subtotal</h2>
        <h2 className={styles.text}>
          {`£${cartItems.reduce((total, cartItem) => {
            const item = data.find((i) => i._id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}`}
        </h2>
      </div>
      <div className={styles.subContainer}>
        <h2 className={styles.text}>Delivery</h2>
        <h2 className={styles.checkoutText}>To be confirmed at checkout</h2>
      </div>
      {cartItems.length > 0 ? (
        <>
          <hr />
          <div className={styles.subContainer}>
            <h2 className={styles.totalText}>Total</h2>
            <h2 className={styles.totalText}>{`£${cartItems.reduce(
              (total, cartItem) => {
                const item = data.find((i) => i._id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              },
              0
            )}`}</h2>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Proceed to checkout</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SummaryModal;
