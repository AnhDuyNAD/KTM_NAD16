// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext"; // Import CartProvider
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop
import Layout from "./Layout"; // Import Layout component

// Import các trang
import Home from "./Home";
import Offers from "./Offers";
import About from "./About";
import Product from "./Product";
import Banner from "./Banner";
import Product2 from "./Product2";
import Review from "./Review";
import Contact from "./Contact1";
import Gallery from "./Gallery1";
import Order from "./Order";
import CartPage from "./CartPage";
import Countdown from "./Countdown";
function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />{" "}
        {/* Đảm bảo cuộn lên đầu trang mỗi khi thay đổi route */}
        <Routes>
          {/* Trang chính */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
                <Offers />
                <About />
                <Countdown />
                <Product />
                <Banner />
                <Product2 />
                <Gallery />
                <Contact />
                <Review />
              </Layout>
            }
          />

          {/* Trang Order */}
          <Route
            path="/order"
            element={
              <Layout>
                <Order />
              </Layout>
            }
          />

          {/* Trang Giỏ Hàng */}
          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />

          {/* Các trang khác */}
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          <Route
            path="/review"
            element={
              <Layout>
                <Review />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
