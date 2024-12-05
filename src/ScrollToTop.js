// ScrollToTop.js
import React from "react";
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href="#" className="arrow" onClick={scrollToTop}>
      <img src="./img/up-arrow.png" alt="Scroll to top" width="50px" />
    </a>
  );
};

export default ScrollToTop;
