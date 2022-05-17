import "./featured.css";
import Product from "../product/Product";
import { featuredProducts } from "../../data";
const Featured = () => {
  return (
    <div className="productContainer">
      {featuredProducts.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </div>
  );
};

export default Featured;
