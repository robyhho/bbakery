import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Goal from "./Goal";
import LandingProduct from "./LandingProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="top-container">
        <h1>Welcome to Betty's Bakery</h1>
        <section className="homeBtnSection">
          <button className="homeBtn">Shop Now</button>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="downarrow"
          ></FontAwesomeIcon>
        </section>
      </div>
      <Goal></Goal>
      <LandingProduct></LandingProduct>
      <Footer></Footer>
    </>
  );
};

export default Home;
