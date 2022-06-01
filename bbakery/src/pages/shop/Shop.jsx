import styles from "./shop.module.css";
import Navbar from "../../components/navbar/Navbar";
import ShopItem from "../../components/shopItem/ShopItem";
import Footer from "../../components/footer/Footer";
import { products } from "../../data";

/* TODO:

Add useState / effect to store amount of each item / Create basket.

Add button function
Add button update text / usestate?
*/

const Shop = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.shopContainer}>
        <h1 className={styles.shopTitle}>Menu</h1>
        <h2 className={styles.shopSubtotal}>Subtotal: £10</h2>
        <div className={styles.shopItemsContainer}>
          {products.map((item) => (
            <ShopItem key={item.id}></ShopItem>
          ))}
        </div>
        <div className={styles.viewBtnContainer}>
          <button className={styles.viewBtn}>
            <p>View Order (4)</p>
            <p>£10:00</p>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Shop;
