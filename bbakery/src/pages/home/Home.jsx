import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./home.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Goal from "./Goal";
import LandingProduct from "./LandingProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  //UseStates

  //Functions

  // const addToCart = (el) => {
  //   setCart([...cart, el]);
  //   console.log(cart);
  // };

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.topContainer}>
        <h1 className={styles.homeTitle}>Welcome to Betty's Bakery</h1>
        <section className={styles.homeBtnSection}>
          <NavLink to="/shop" className={styles.homeBtn}>
            Shop Now
          </NavLink>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={styles.downarrow}
          ></FontAwesomeIcon>
        </section>
      </div>
      <Goal></Goal>
      <LandingProduct></LandingProduct>
      <Footer></Footer>
    </>
  );
};

export default Home;
