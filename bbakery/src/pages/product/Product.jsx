import "./product.css";
import Image from "../../images/bb-eggtarts.jpeg";
import Navbar from "../../components/navbar/Navbar";
import ProductDetails from "../../components/productDetails/ProductDetails";
const Product = () => {
  return (
    <div className="productContainer">
      <Navbar></Navbar>
      <span className="xBtn">X</span>
      <img src={Image} alt="" className="productImage" />
      <h1 className="productTitle">Hong Kong Egg Tart</h1>
      <p className="productText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
        justo id erat cursus luctus. Cras quis quam pulvinar, egestas tellus ac,
        molestie risus. Nam pharetra tempus dui nec tincidunt. Vestibulum
        sagittis urna a faucibus aliquet. Praesent luctus sed nisi quis tempus.
        Fusce enim arcu, convallis finibus mattis eu, interdum et justo.
      </p>
      <ProductDetails></ProductDetails>
    </div>
  );
};

export default Product;
