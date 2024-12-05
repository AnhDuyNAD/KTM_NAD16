import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Product = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate hook

  const products = [
    {
      img: "./img/p1.png",
      title: "Sofa",
      description: "Sofa Ergonomic Ergostuhl 8",
      price: "600.000 VNĐ",
    },
    {
      img: "./img/p2.png",
      title: "Ghế",
      description: "Ghế Sofa thư giãn ZT20A",
      price: "920.000 VNĐ",
    },
    {
      img: "./img/p3.png",
      title: "Sofa",
      description: "Sofa da bò Malaysia ZDA1184",
      price: "1.900.000 VNĐ",
    },
    {
      img: "./img/p4.png",
      title: "Ghế",
      description: "Ghế Sofa đơn armchair SD3009",
      price: "200.000 VNĐ",
    },
    {
      img: "./img/p5.png",
      title: "Ghế",
      description: "Ghế Sky",
      price: "650.000 VNĐ",
    },
  ];

  // Hàm xử lý nhấn nút Đặt hàng ngay
  const handleOrderNow = () => {
    navigate("/order"); // Điều hướng đến trang Order
  };

  return (
    <section className="product" id="product">
      <div className="main-txt">
        <h3>Các sản phẩm</h3>
      </div>
      <div className="card-content">
        {products.map((product, index) => (
          <div className="row" key={index}>
            <img src={product.img} alt={product.title} />
            <div className="card-body">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h5>Giá: {product.price}</h5>
              <button onClick={handleOrderNow}>Đặt hàng ngay</button>{" "}
              {/* Thêm onClick */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
