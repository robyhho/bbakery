import React from "react";
import styles from "./contact.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subTitle}>Have a suggestion or message for us? </p>
        <p className={styles.subTitle}>
          Leave us a message here, or contact us on our social media platforms.
        </p>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="" className={styles.label}>
              Name:
            </label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="" className={styles.label}>
              Email: *
            </label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="" className={styles.label}>
              Phone Number:
            </label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="" className={styles.label}>
              Message:
            </label>
            <textarea
              rows="4"
              cols="50"
              className={` ${styles.message}`}
            ></textarea>
          </div>
          <button type="submit" className={styles.submit}>
            Send
          </button>
        </form>
      </div>
      {/* Background Accents */}
      <img
        src="../../images/svgs/contactSvg.svg"
        className={styles.contactSvg}
        alt="Brown Semicircle for background styling"
      ></img>
      {/*   */}
      <Footer></Footer>
    </>
  );
};

export default Contact;
