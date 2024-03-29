import Navbar from "../../components/navbar/Navbar";
import OrangeBtn from "../../components/orangeBtn/OrangeBtn";
import styles from "./cancel.module.css";
const Cancel = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <main className={styles.container}>
          <h1 className={styles.title}>
            Forgot to add something to your cart? <br />
            Swing by our shop.
          </h1>
          <div className={styles.btnContainer}>
            <OrangeBtn destination={"/shop"}></OrangeBtn>
          </div>
          <img
            src="../../images/svgs/cancelBg.svg"
            className={styles.cancelBg}
            alt="Brown Semicircle"
          ></img>
          <img
            src="../../images/svgs/triangles.svg"
            alt="Brown Triangles"
            className={styles.bgTriangles}
          />
        </main>
      </header>
    </>
  );
};

export default Cancel;
