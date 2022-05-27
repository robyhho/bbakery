import "./checkout.css";
import Navbar from "../../components/navbar/Navbar";

import BasketModal from "../../components/basketModal/BasketModal";

const Checkout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="checkoutContainer">
        <BasketModal></BasketModal>

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
