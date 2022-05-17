import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutContainer">
        <div className="square"></div>
        <h1 className="aboutTitle">About Us</h1>
        <p className="aboutPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          odio bibendum tortor blandit, vel iaculis turpis ornare. Cras dolor
          eros, varius vitae congue a, fermentum ac dui. Etiam vitae ullamcorper
          lectus. Phasellus non blandit erat. Sed accumsan lectus in leo iaculis
          tincidunt. Duis maximus tortor at lobortis efficitur. Donec fringilla,
          felis vel pulvinar viverra, diam lectus ultricies sapien, sed purus.
          Nam consequat commodo mattis.
        </p>
        <p className="aboutPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          odio bibendum tortor blandit, vel iaculis turpis ornare. Cras dolor
          eros, varius vitae congue a, fermentum ac dui. Etiam vitae ullamcorper
          lectus. Phasellus non blandit erat. Sed accumsan lectus in leo iaculis
          tincidunt. Duis maximus tortor at lobortis efficitur. Donec fringilla,
          felis vel pulvinar viverra, diam lectus ultricies sapien, sed
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
