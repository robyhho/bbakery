import "./productDetails.css";
import { products } from "../../data";
import { useState } from "react";
/* TODO: Change so different products reflected in details

Add functions to the buttons


*/
const ProductDetails = () => {
  const [showNutrition, setShowNutrition] = useState(true);
  return (
    <section className="productDetailsContainer">
      {showNutrition ? <NutritionInfo /> : <DietaryInfo />}
    </section>
  );
};

const NutritionInfo = () => {
  return (
    <>
      <div className="productDetailsTitleContainer">
        <h2>Dietary Info</h2>
        <h2 className="pdActive">Nutrition</h2>
      </div>

      <section className="nutritionContainer">
        <div className="nutritonLeft">
          <p className="pdDetailText">
            Energy (kcal) <span className="pdDetailSpan">250kcal</span>
          </p>
          <hr />
          <p className="pdDetailText">
            Fats <span className="pdDetailSpan">1.0g</span>
          </p>
          <hr />
          <p className="pdDetailText">
            of which saturates <span className="pdDetailSpan">0.2g</span>
          </p>
          <hr />
          <p className="pdDetailText">
            Proteins <span className="pdDetailSpan">11.2g</span>
          </p>
          <hr />
          <p className="pdDetailText">
            Salt <span className="pdDetailSpan">1.5g</span>
          </p>
        </div>
        <div className="nutritionRight">
          <p className="pdDetailText">
            Energy (kJ) <span className="pdDetailSpan">1100kj</span>
          </p>
          <hr />
          <p className="pdDetailText">
            Carbs <span className="pdDetailSpan">56.3g</span>
          </p>
          <hr />
          <p className="pdDetailText">
            of which sugars <span className="pdDetailSpan">8g</span>
          </p>
          <hr />
          <p className="pdDetailText">
            Fibres <span className="pdDetailSpan">2g</span>
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
