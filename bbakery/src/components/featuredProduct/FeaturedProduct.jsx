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
      <img
        src={item.photos[0]}
        alt={`Image of a ${item.name}`}
        className={styles.image}
        onClick={handleClick}
      />
      <h3 className={styles.productTitle}>{item.name}</h3>
      <p className={styles.findSpan} onClick={handleClick}>
        Find out more
      </p>
    </div>
  );
};

export default FeaturedProduct;
