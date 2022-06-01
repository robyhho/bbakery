import styles from "./basketItem.module.css";
import Image from "../../images/bb_pineapplebun.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

/* 
TODO:
Change Image so it uses prop to change image.
Add functionality and useState to int and buttons.
Update price and name for each item depending on the item.

*/

const BasketItem = () => {
  return (
    <div className={styles.basketModalMain}>
      <div className={styles.basketMainTop}>
        <h2>Pineapple Bun</h2>
        <h2>£3:15</h2>
      </div>
      <div className={styles.basketMainContent}>
        <img
          src={Image}
          alt="Pineapple Bun on a plate"
          className={styles.checkoutBasketImage}
        />
        <div className={styles.basketBtnContainer}>
          <FontAwesomeIcon
            icon={faMinus}
            className={styles.minusIcon}
          ></FontAwesomeIcon>
          <span className={styles.basketMainInt}>0</span>
          <FontAwesomeIcon
            icon={faPlus}
            className={styles.plusIcon}
          ></FontAwesomeIcon>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BasketItem;
