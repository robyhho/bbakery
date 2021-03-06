import styles from "./product.module.css";

import Navbar from "../../components/navbar/Navbar";
import ProductDetails from "../../components/productDetails/ProductDetails";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/find/${id}`);

  return (
    <>
      {loading ? (
        "hello"
      ) : (
        <>
          <Navbar></Navbar>
          <div className={styles.productContainer}>
            {!loading && data.photos !== undefined && (
              <img
                src={`${data.photos}`}
                alt={`Image of ${data.name}`}
                className={styles.productImage}
              />
            )}

            <h1 className={styles.productTitle}>{data.name}</h1>
            <p className={styles.productText}>{data.desc}</p>
            <ProductDetails data={data}></ProductDetails>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
