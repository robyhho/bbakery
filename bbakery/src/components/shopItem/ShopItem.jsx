import "./shopItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ShopItem = () => {
  return (
    <>
      <section className="shopItemContainer">
        <span className="shopItemDot"></span>
        <h2 className="shopItemTitle">Pineapple Buns</h2>
        <div className="shopBtnContainer">
          <FontAwesomeIcon
            icon={faMinus}
            className="shopMinus"
          ></FontAwesomeIcon>
          <span className="itemNum">0</span>
          <FontAwesomeIcon icon={faPlus} className="shopPlus"></FontAwesomeIcon>
        </div>
      </section>
    </>
  );
};

export default ShopItem;
