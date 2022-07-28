import styles from "./about.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div className={styles.square}></div>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <p className={styles.aboutPara}>
          Nice to meet you! I’m Betty, the cook behind Betty’s bakery. Being
          born and raised in Hong Kong, I have an unhealthy obsession with Hong
          Kong style baked goodies. After moving to England, I have been
          searching for a place which satisfies these cravings of original Hong
          Kong baked pastries, but I am still yet to find one. Leading me start
          baking at home.
        </p>
        <p className={styles.aboutPara}>
          I discovered that Hong Kong bakery products are actually a niche
          product, and not widely known. Sharing my baked goodies with friends
          and family and seeing their reactions and enjoyment was incredibly
          rewarding and led me to starting up my own bakery. Betty’s Bakery is
          aimed at spreading Hong Kong inspired goods around our local community
          and giving everyone the ability to try them.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
