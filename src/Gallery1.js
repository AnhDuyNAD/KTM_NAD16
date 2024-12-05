import React from "react";
import "./styles.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <h3>Thư viện của chúng tôi</h3>
      <div className="gallery-img">
        <div className="img1">
          <img src="./img/g1.png" alt="Hình 1" />
        </div>
        <div className="img1">
          <img src="./img/g2.png" alt="Hình 2" />
          <img src="./img/g3.png" alt="Hình 3" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
