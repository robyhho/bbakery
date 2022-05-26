import "./checkout.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="checkoutContainer">
        <section className="checkoutBasketModal">
          <div className="basketModalTop">
            <FontAwesomeIcon
              className="arrowLeft"
              icon={faArrowLeft}
            ></FontAwesomeIcon>
            <h1 className="basketModalTitle">Basket Contents</h1>
          </div>
        </section>
        <section className="checkoutPromotionModal">
          <p>promotion</p>
        </section>
        <section className="checkoutSummaryModal">
          <p>Summary</p>
        </section>
        <section className="checkoutButtonModal">
          <button>Checkout </button>
        </section>
      </div>
    </>
  );
};

export default Checkout;
