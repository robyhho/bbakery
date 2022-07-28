import styles from "./featuredProduct.module.css";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = ({ item }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    let path = `/product/${item._id}`;
    navigate(path);
  };

  return (
    <div>
      <span className={styles.dot}></span>
      <h3 className={styles.productTitle}>{item.name}</h3>
      <p className={styles.findSpan} onClick={handleClick}>
        Find out more
      </p>
    </div>
  );
};

export default FeaturedProduct;
