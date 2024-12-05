// src/components/Product2.js
import React from "react";
import { Link } from "react-router-dom";

const Product2 = () => {
  return (
    <section className="product" id="products" style={{ marginTop: "50px" }}>
      <div className="main-txt">
        <h3>Các sản phẩm giảm 50%</h3>
      </div>
      <div className="card-content">
        <div className="row">
          <img src="./img/p9.png" alt="" />
          <div className="card-body">
            <h3>Sofa</h3>
            <p>Sofa da phong cách Ý ZL175C</p>
            <h5>Giá: 1.100.000 VNĐ</h5>
            <Link to="/order">
              <button>Đặt hàng ngay</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <img src="./img/p10.png" alt="" />
          <div className="card-body">
            <h3>Tủ Tivi</h3>
            <p>Tủ Tivi Cao Cấp 38T</p>
            <h5>Giá: 200.000 VNĐ</h5>
            <Link to="/order">
              <button>Đặt hàng ngay</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <img src="./img/p11.png" alt="" />
          <div className="card-body">
            <h3>Ghế</h3>
            <p>Ghế Tròn Đan Dây AM-007A</p>
            <h5>Giá: 6.000.000 VNĐ</h5>
            <Link to="/order">
              <button>Đặt hàng ngay</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <img src="./img/p12.png" alt="" />
          <div className="card-body">
            <h3>Ghế</h3>
            <p>Ghế Grace Có Tay Gỗ Tần Bì</p>
            <h5>Giá: 5.500.000 VNĐ</h5>
            <Link to="/order">
              <button>Đặt hàng ngay</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product2;
