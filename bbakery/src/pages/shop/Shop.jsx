import "../../App.css";
import styles from "./shop.module.css";
import Navbar from "../../components/navbar/Navbar";
import ShopItem from "../../components/shopItem/ShopItem";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import SkeletonShopItem from "../../components/skeleton/SkeletonShopItem";

const Shop = () => {
  const { data, loading, error } = useFetch("/products/find");
  const { cartQuantity, cartItems } = useShoppingCart();
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  let basketTotal = `£${cartItems.reduce((total, cartItem) => {
    const item = data.find((i) => i._id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0)}`;
  return (
    <>
      {loading == true ? (
        <>
          <Navbar></Navbar>
          <div className={styles.shopContainer}>
            <h1 className={styles.shopTitle}>
              <div className="skeleton skeletonTitle"></div>
            </h1>
            <h2 className={styles.shopSubtotal}>
              <div className="skeleton skeletonTitle"></div>
            </h2>
            <div className={styles.shopItemsContainer}>
              <SkeletonShopItem></SkeletonShopItem>
              <SkeletonShopItem></SkeletonShopItem>
              <SkeletonShopItem></SkeletonShopItem>
              <SkeletonShopItem></SkeletonShopItem>
              <SkeletonShopItem></SkeletonShopItem>
              <SkeletonShopItem></SkeletonShopItem>
            </div>
            <div className={styles.viewBtnContainer}>
              <button className={styles.viewBtn}>
                <p className="skeleton skeletonText"></p>
              </button>
            </div>
          </div>
          <Footer></Footer>
        </>
      ) : (
        <>
          <Navbar></Navbar>
          <div className={styles.shopContainer}>
            <h1 className={styles.shopTitle}>Menu</h1>
            <h2
              className={styles.shopSubtotal}
            >{`Subtotal: ${basketTotal}`}</h2>
            <div className={styles.shopItemsContainer}>
              {data.map((item) => (
                <ShopItem {...item} key={item._id}></ShopItem>
              ))}
            </div>
            <div className={styles.viewBtnContainer}>
              <button
                className={styles.viewBtn}
                onClick={() => {
                  handleClick();
                }}
              >
                <p>
                  {cartQuantity > 0
                    ? `View Order (${cartQuantity})`
                    : "Basket currently empty"}
                </p>
                <p>{}</p>
              </button>
            </div>
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default Shop;
