import "./featured.css";
import FeaturedProduct from "../featuredProduct/FeaturedProduct";
import { featuredProducts } from "../../data";
const Featured = () => {
  return (
    <div className="productContainer">
      {featuredProducts.map((item) => (
        <FeaturedProduct item={item} key={item.id}></FeaturedProduct>
      ))}
    </div>
  );
};

export default Featured;