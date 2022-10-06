import styles from "./landingProduct.module.css";
import Featured from "../../components/featured/Featured";
import Square from "../../components/accents/square/Square";
import Triangles from "../../components/accents/triangles/Triangles";
import DiagonalLines from "../../components/accents/diagonalLines/DiagonalLines";
const LandingProduct = () => {
  return (
    <div className={styles.landingContainer}>
      <h1 className={styles.featuredTitle}>Our Featured Products</h1>
      <Featured></Featured>
      <Triangles></Triangles>
      <Square></Square>
      <DiagonalLines></DiagonalLines>
    </div>
  );
};

export default LandingProduct;
