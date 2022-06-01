import styles from "./featuredProduct.module.css";

const FeaturedProduct = ({ item }) => {
  const handleClick = () => {
    console.log(item.id);
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
