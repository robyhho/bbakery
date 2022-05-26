import "./shop.css";
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
      <div className="shopContainer">
        <h1 className="shopTitle">Menu</h1>
        <h2 className="shopSubtotal">Subtotal: £10</h2>
        <div className="shopItemsContainer">
          {products.map((item) => (
            <ShopItem></ShopItem>
          ))}
        </div>
        <div className="viewBtnContainer">
          <button className="viewBtn">
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
