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
          <OrangeBtn destination={"/shop"}></OrangeBtn>
        </main>
      </header>
    </>
  );
};

export default Cancel;
