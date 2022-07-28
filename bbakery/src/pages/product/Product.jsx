import styles from "./product.module.css";
import Image from "../../images/bb-eggtarts.jpeg";
import Navbar from "../../components/navbar/Navbar";
import ProductDetails from "../../components/productDetails/ProductDetails";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(`/products/find/${id}`);

  return (
    <>
      <Navbar></Navbar>

      <div className={styles.productContainer}>
        <img src={Image} alt="" className={styles.productImage} />
        <h1 className={styles.productTitle}>{data.name}</h1>
        <p className={styles.productText}>{data.desc}</p>
        <ProductDetails data={data}></ProductDetails>
      </div>
    </>
  );
};

export default Product;
