import styles from "./success.module.css";

const Success = () => {
  return (
    <>
      <header>
        <h1 className={styles.logo}>Dantat</h1>
      </header>
      <main className={styles.main}>
        <h2 className={styles.text}>
          Your order has been confirmed and will be shipping soon!
        </h2>
        <section className={styles.orderMeta}>
          <div className={styles.orderDeets}>
            <p className={styles.detailTitle}>Order Date</p>
            <p className={styles.detailvalue}>28 November 2022</p>
          </div>
          <div className={styles.orderDeets}>
            <p className={styles.detailTitle}>Order Number</p>
            <p className={styles.detailvalue}>UK714922</p>
          </div>
          <div className={styles.orderDeets}>
            <p className={styles.detailTitle}>Payment Method</p>
            <p className={styles.detailvalue}>Visa - *****5090</p>
          </div>
          <div className={styles.orderDeets}>
            <p className={styles.detailTitle}>Address</p>
            <p className={styles.detailvalue}>27, Grove Road</p>
          </div>
        </section>
        <section className={styles.orderItems}>
          <div className={styles.item}>
            <img src="" alt="Image of the item" className={styles.itemImg} />
            <p className={styles.itemName}>Char Siu Bao</p>
            <p className={styles.itemQty}>Qty 5</p>
            <p className={styles.itemPrice}>£10.70</p>
          </div>
          <div className={styles.item}>
            <img src="" alt="Image of the item" className={styles.itemImg} />
            <p className={styles.itemName}>Egg Tart</p>
            <p className={styles.itemQty}>Qty 5</p>
            <p className={styles.itemPrice}>£10.70</p>
          </div>
        </section>
        <section className={styles.costSection}>
          <div className={styles.subtotal}>
            <p className={styles.costSectionTitle}>Subtotal</p>
            <p className={styles.costSectionPrice}>£21.40</p>
          </div>
          <div className={styles.shipping}>
            <p className={styles.costSectionTitle}>Shipping</p>
            <p className={styles.costSectionPrice}>£1.90</p>
          </div>
          <div className={styles.discounts}>
            <p className={styles.costSectionTitle}>Discounts</p>
            <p className={styles.costSectionPrice}>-20% (£5.00)</p>
          </div>
        </section>
        <section className={styles.total}>
          <p className={styles.total}>Total</p>
          <p className={styles.totalPrice}>£23.30</p>
        </section>
        <div className={styles.closingSection}>
          <p className={styles.closingText}>
            We’ll send you a shipping confirmation when your item's are on the
            way! We appreciate your business, and hope you enoy your purchase
          </p>
          <p className={styles.closingText}>Thank You!</p>
          <p className={styles.closingLogo}>Dantat</p>
        </div>
      </main>
    </>
  );
};

export default Success;
