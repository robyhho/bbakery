import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";
import Success from "./pages/success/Success";
import ScrollToTop from "./ScrollToTop";
import Cancel from "./pages/cancel.jsx/Cancel";
function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/success" element={<Success />}></Route>
            <Route path="/cancel" element={<Cancel />}></Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
