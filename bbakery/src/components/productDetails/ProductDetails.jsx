import styles from "./productDetails.module.css";
import { useState } from "react";

/* TODO: Change so different products reflected in details

Add functions to the buttons


*/
const ProductDetails = ({ data }) => {
  const [showNutrition, setShowNutrition] = useState(true);
  return (
    <>
      <section className={styles.productDetailsContainer}>
        {showNutrition ? (
          <NutritionInfo data={data} setShowNutrition={setShowNutrition} />
        ) : (
          <DietaryInfo data={data} setShowNutrition={setShowNutrition} />
        )}
      </section>
    </>
  );
};

const NutritionInfo = ({ data, setShowNutrition }) => {
  const kjInt = 4.184;
  const handleClick = () => {
    setShowNutrition(false);
  };
  return (
    <>
      <div className={styles.productDetailsTitleContainer}>
        <h2 onClick={handleClick}>Dietary Info</h2>
        <h2 className={styles.pdActive}>Nutrition</h2>
      </div>

      <section className={styles.nutritionContainer}>
        <div className={styles.nutritonLeft}>
          <p className={styles.pdDetailText}>
            Energy (kcal){" "}
            <span className={styles.pdDetailSpan}>{data.energy}kcal</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Fats <span className={styles.pdDetailSpan}>{data.fat}g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            of which saturates{" "}
            <span className={styles.pdDetailSpan}>{data.saturatedFat}g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Proteins{" "}
            <span className={styles.pdDetailSpan}>{data.protein}g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Salt <span className={styles.pdDetailSpan}>{data.salt}mg</span>
          </p>
        </div>
        <div className={styles.nutritionRight}>
          <p className={styles.pdDetailText}>
            Energy (kJ){" "}
            <span className={styles.pdDetailSpan}>
              {Math.round(data.energy * kjInt)}kj
            </span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Carbs <span className={styles.pdDetailSpan}>{data.carbs}g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            of which sugars{" "}
            <span className={styles.pdDetailSpan}>{data.carbSugars}g</span>
          </p>
          <hr />
          <p className={styles.pdDetailText}>
            Fibres <span className={styles.pdDetailSpan}>{data.fibre}g</span>
          </p>
        </div>
      </section>
    </>
  );
};

const DietaryInfo = ({ data, setShowNutrition }) => {
  const handleClick = () => {
    setShowNutrition(true);
  };
  return (
    <>
      <div className={styles.productDetailsTitleContainer}>
        <h2 className={styles.pdActive}>Dietary Info</h2>
        <h2 onClick={handleClick}>Nutrition</h2>
      </div>
      <div className={styles.pdTextContainer}>
        <p className={styles.pdDetailText}>Energy:</p>
        <span className={styles.pdDetailSpan}>250kcal / 1100kj</span>
      </div>
      <div className={styles.pdTextContainer}>
        <p className={styles.pdDetailText}>Allergens:</p>
        <span className={styles.pdDetailSpan}>
          Milk, Cereals containing gluten
        </span>
      </div>
      <div className={styles.pdTextContainer}>
        <p className={styles.pdDetailText}> Diets:</p>
        <span className={styles.pdDiet}>V</span>
      </div>
    </>
  );
};

export default ProductDetails;
