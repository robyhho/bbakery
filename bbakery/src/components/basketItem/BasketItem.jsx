import styles from "./basketItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

const BasketItem = ({ id }) => {
  const { data, loading, error } = useFetch(`/products/find/${id}`);
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  const updatingQuantity = getItemQuantity(id);

  return (
    <>
      <div className={styles.basketModalMain}>
        <div className={styles.basketMainTop}>
          <div className={styles.titleContainer}>
            <h2 className={styles.itemName}>{data.name}</h2>
            {updatingQuantity > 1 && (
              <span
                className={styles.mutedQuantity}
              >{`x${updatingQuantity}`}</span>
            )}
          </div>
          <h2 className={styles.priceTag}>{`£${
            data.price * updatingQuantity
          }`}</h2>
        </div>
        <div className={styles.basketMainContent}>
          {!loading && data.photos !== undefined && (
            <img
              src={data.photos[0]}
              alt={`Image of ${data.name}`}
              className={styles.checkoutBasketImage}
            />
          )}
          <div className={styles.basketBtnContainer}>
            {updatingQuantity === 1 ? (
              <FontAwesomeIcon
                icon={faTrashCan}
                className={styles.trashCan}
                onClick={() => {
                  decreaseCartQuantity(id);
                }}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faMinus}
                className={styles.minusIcon}
                onClick={() => {
                  decreaseCartQuantity(id);
                }}
              ></FontAwesomeIcon>
            )}
            <span className={styles.basketMainInt}>{updatingQuantity}</span>
            <FontAwesomeIcon
              icon={faPlus}
              className={styles.plusIcon}
              onClick={() => {
                increaseCartQuantity(id);
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default BasketItem;
