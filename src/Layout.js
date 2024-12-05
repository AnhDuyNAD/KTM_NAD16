// src/components/Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children} {/* Nội dung của các trang sẽ được hiển thị tại đây */}
      <Footer />
    </>
  );
};

export default Layout;
