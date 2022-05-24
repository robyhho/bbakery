import "./productDetails.css";
import { products } from "../../data";
/* TODO: Change so different products reflected in details

Add functions to the buttons
*/
const ProductDetails = () => {
  return (
    <section className="productDetailsContainer">
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
    </section>
  );
};

export default ProductDetails;
