import "./basketModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../../images/bb_pineapplebun.jpeg";

const BasketModal = () => {
  return (
    <>
      <section className="checkoutBasketModal">
        <div className="basketModalTop">
          <FontAwesomeIcon
            className="arrowLeft"
            icon={faArrowLeft}
          ></FontAwesomeIcon>
          <h1 className="basketModalTitle">Basket Contents</h1>
        </div>
        <div className="basketModalMain">
          <div className="basketMainTop">
            <h2>Pineapple Bun</h2>
            <h2>£3:15</h2>
          </div>
          <div className="basketMainContent">
            <img
              src={Image}
              alt="Pineapple Bun on a plate"
              className="checkoutBasketImage"
            />
            <div className="basketBtnContainer">
              <FontAwesomeIcon
                icon={faMinus}
                className="minusIcon"
              ></FontAwesomeIcon>
              <span className="basketMainInt">0</span>
              <FontAwesomeIcon
                icon={faPlus}
                className="plusIcon"
              ></FontAwesomeIcon>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default BasketModal;
