import React from "react";
import styles from "./orangeBtn.module.css";
import { NavLink } from "react-router-dom";

const OrangeBtn = ({ destination }) => {
  return (
    <>
      <NavLink to={destination} className={styles.homeBtn}>
        Shop Now
      </NavLink>
    </>
  );
};

export default OrangeBtn;
