import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./pages/categories/categories";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
