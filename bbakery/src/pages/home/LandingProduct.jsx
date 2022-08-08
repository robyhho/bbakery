import styles from "./landingProduct.module.css";
import Featured from "../../components/featured/Featured";

const LandingProduct = () => {
  return (
    <div>
      <h1 className={styles.featuredTitle}>Our Featured Products</h1>
      <Featured></Featured>
    </div>
  );
};

export default LandingProduct;
