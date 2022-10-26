import React from "react";
import styles from "./home.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import OrangeBtn from "../../components/orangeBtn/OrangeBtn";
import Goal from "./Goal";
import LandingProduct from "./LandingProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.topContainer}>
        <h1 className={styles.homeTitle}>Welcome to Dantat</h1>
        <section className={styles.homeBtnSection}>
          <OrangeBtn destination={"/shop"}></OrangeBtn>
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
