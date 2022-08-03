import styles from "./featured.module.css";
import FeaturedProduct from "../featuredProduct/FeaturedProduct";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch("/products/find/?featured=true");

  return (
    <div className={styles.productContainer}>
      {loading
        ? "loading"
        : data &&
          data.map((item) => (
            <FeaturedProduct
              item={item}
              key={item._id}
              className={styles.product}
            ></FeaturedProduct>
          ))}
    </div>
  );
};

export default Featured;
