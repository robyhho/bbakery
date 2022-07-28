import styles from "./shopItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// import CartContext from "../../contexts/ShoppingCartContext";

import { useShoppingCart } from "../../contexts/ShoppingCartContext";

const ShopItem = ({ _id, name, price }) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  const quantity = getItemQuantity(_id);
  return (
    <>
      <section
        className={styles.shopItemContainer}
        onClick={quantity === 0 ? () => increaseCartQuantity(_id) : undefined}
      >
        <span className={styles.shopItemSquare}></span>
        <div className={styles.shopBottomContainer}>
          <h2 className={styles.shopItemTitle}>{name}</h2>
          <h2 className={styles.shopItemPrice}>{`£${price} each`}</h2>
          {quantity > 0 && (
            <div className={styles.buttonContainer}>
              <FontAwesomeIcon
                icon={faMinus}
                className={styles.shopMinus}
                onClick={() => decreaseCartQuantity(_id)}
              ></FontAwesomeIcon>
              <p className={styles.itemNum}>{quantity}</p>
              <FontAwesomeIcon
                icon={faPlus}
                className={styles.shopPlus}
                onClick={() => increaseCartQuantity(_id)}
              ></FontAwesomeIcon>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ShopItem;
