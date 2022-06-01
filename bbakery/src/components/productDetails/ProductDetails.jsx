import styles from "./productDetails.module.css";
import { products } from "../../data";
import { useState } from "react";
/* TODO: Change so different products reflected in details

Add functions to the buttons


*/
const ProductDetails = () => {
  const [showNutrition, setShowNutrition] = useState(true);
  return (
    <>
      <section className={styles.productDetailsContainer}>
        {showNutrition ? <NutritionInfo /> : <DietaryInfo />}
      </section>
    </>
  );
};

const NutritionInfo = () => {
  return (
    <>
      <div className={styles.productDetailsTitleContainer}>
        <h2>Dietary Info</h2>
        <h2 className={styles.pdActive}>Nutrition</h2>
      </div>

      <section className={styles.nutritionContainer}>
        <div className={styles.nutritonLeft}>
          <p className={styles.pdDetailText}>
            Energy (kcal) <span className={styles.pdDetailSpan}>250kcal</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Fats <span className={styles.pdDetailSpan}>1.0g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            of which saturates <span className={styles.pdDetailSpan}>0.2g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Proteins <span className={styles.pdDetailSpan}>11.2g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Salt <span className={styles.pdDetailSpan}>1.5g</span>
          </p>
        </div>
        <div className={styles.nutritionRight}>
          <p className={styles.pdDetailText}>
            Energy (kJ) <span className={styles.pdDetailSpan}>1100kj</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Carbs <span className={styles.pdDetailSpan}>56.3g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            of which sugars <span className={styles.pdDetailSpan}>8g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Fibres <span className={styles.pdDetailSpan}>2g</span>
          </p>
        </div>
      </section>
    </>
  );
};

const DietaryInfo = () => {
  return (
    <>
      <div className="productDetailsTitleContainer">
        <h2 className="pdActive">Dietary Info</h2>
        <h2>Nutrition</h2>
      </div>
      <p className="pdDetailText">
        Energy <span className="pdDetailSpan">250kcal / 1100kj</span>
      </p>
      <p className="pdDetailText">
        Allergens:
        <span className="pdDetailSpan">Milk, Cereals containing gluten</span>
      </p>
      <p className="pdDetailText">
        Diets: <span className="pdDiet">V</span>
      </p>
    </>
  );
};

export default ProductDetails;
