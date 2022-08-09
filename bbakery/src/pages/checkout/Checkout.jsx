import styles from "./checkout.module.css";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

import BasketModal from "../../components/basketModal/BasketModal";
import CheckoutPromotion from "../../components/checkoutPromotion/CheckoutPromotion";
import SummaryModal from "../../components/summaryModal/SummaryModal";
import SkeletonCheckout from "../../components/skeleton/SkeletonCheckout";

const Checkout = () => {
  const { data, loading, error } = useFetch(`/products/find/`);
  const { cartItems } = useShoppingCart();

  const createSession = () => {};

  return (
    <>
      <Navbar></Navbar>
      {loading === true ? (
        <div className={styles.checkoutContainer}>
          <SkeletonCheckout></SkeletonCheckout>
        </div>
      ) : (
        <>
          <div className={styles.checkoutContainer}>
            <section className={styles.checkoutBasketModal}>
              <BasketModal></BasketModal>
            </section>

            <section className={styles.checkoutSummaryModal}>
              <SummaryModal></SummaryModal>
            </section>
            <section className={styles.checkoutPromotionModal}>
              <CheckoutPromotion></CheckoutPromotion>
            </section>
            {cartItems.length > 0 ? (
              <section className={styles.checkoutButtonModal}>
                <>
                  <button
                    className={styles.button}
                    onClick={() => createSession()}
                  >
                    <span>Checkout</span>
                    <span>
                      {`£${cartItems.reduce((total, cartItem) => {
                        const item = data.find((i) => i._id === cartItem.id);
                        return total + (item?.price || 0) * cartItem.quantity;
                      }, 0)}`}
                    </span>
                  </button>
                </>
              </section>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Checkout;
