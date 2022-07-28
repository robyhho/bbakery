import styles from "./basketModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BasketItem from "../basketItem/BasketItem";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import { NavLink } from "react-router-dom";

const BasketModal = () => {
  const { cartItems } = useShoppingCart();

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
        {cartItems.length === 0 ? (
          <>
            <h2 className={styles.emptyText}>
              Your basket is empty, visit the shop to add some goodies.
            </h2>
            <NavLink to="/shop" className={styles.homeBtn}>
              Shop Now
            </NavLink>
          </>
        ) : (
          cartItems.map((item) => (
            <BasketItem {...item} key={item.id}></BasketItem>
          ))
        )}
      </section>
    </>
  );
};

export default BasketModal;
