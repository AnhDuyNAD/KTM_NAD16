import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h5>Christmas Sale</h5>
        <h3>Giảm giá 50% cho Noel </h3>
        <p>
          Giảm tới 50% và các ưa đãi
          <br />
          Đừng quên
        </p>
        <button>
          <a href="#products">Đặt ngay</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
