import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
