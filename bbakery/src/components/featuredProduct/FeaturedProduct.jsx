import "./featuredProduct.css";

const FeaturedProduct = ({ item }) => {
  const handleClick = () => {
    console.log(item.id);
  };

  return (
    <div>
      <span className="dot"></span>
      <h3 className="productTitle">{item.name}</h3>
      <p className="findSpan" onClick={handleClick}>
        Find out more
      </p>
    </div>
  );
};

export default FeaturedProduct;
