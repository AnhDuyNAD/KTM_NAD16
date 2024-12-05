import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate
import "./Order.css";

const Order = () => {
  const {
    addToCart,
    cart,
    decreaseQuantity,
    removeFromCart,
    increaseQuantity,
  } = useCart();

  const navigate = useNavigate(); // Khởi tạo navigate

  const products = [
    {
      id: 1,
      img: "./img/p1.png",
      title: "Sofa",
      description: "Sofa Ergonomic Ergostuhl 8",
      price: 600000,
      material: "Da",
    },
    {
      id: 2,
      img: "./img/p2.png",
      title: "Ghế",
      description: "Ghế Sofa thư giãn ZT20A",
      price: 920000,
      material: "Vải",
    },
    {
      id: 3,
      img: "./img/p3.png",
      title: "Sofa",
      description: "Sofa da bò Malaysia ZDA1184",
      price: 1900000,
      material: "Da",
    },
    {
      id: 4,
      img: "./img/p4.png",
      title: "Ghế",
      description: "Ghế Sofa đơn armchair SD3009",
      price: 200000,
      material: "Vải",
    },
    {
      id: 5,
      img: "./img/p5.png",
      title: "Ghế",
      description: "Ghế Sky",
      price: 650000,
      material: "Da",
    },
    {
      id: 6,
      img: "./img/p10.png",
      title: "Tủ Tivi",
      description: "Tủ Tivi Cao Cấp 38T",
      price: 200000,
      material: "Gỗ",
    },
    {
      id: 7,
      img: "./img/p11.png",
      title: "Ghế",
      description: "Ghế Tròn Đan Dây AM-007A",
      price: 6000000,
      material: "Vải",
    },
    {
      id: 8,
      img: "./img/p12.png",
      title: "Ghế",
      description: "Ghế Grace Có Tay Gỗ Tần Bì",
      price: 5500000,
      material: "Gỗ",
    },
    {
      id: 9,
      img: "./img/p9.png",
      title: "Sofa",
      description: "Sofa da phong cách Ý ZL175C",
      price: 1100000,
      material: "Da",
    },
    {
      id: 10,
      img: "./img/card1.png",
      title: "Sofa",
      description: "Sofa Oriental vact10389",
      price: 1100000,
      material: "Vải",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchMaterial, setSearchMaterial] = useState("");
  const [likedProducts, setLikedProducts] = useState([]);
  const [showCartBox, setShowCartBox] = useState(false);

  const filteredProducts = products.filter((product) => {
    const isSearchTextMatch = searchText
      ? product.title.toLowerCase().includes(searchText.toLowerCase())
      : true;
    const isMaterialMatch = searchMaterial
      ? product.material.toLowerCase().includes(searchMaterial.toLowerCase())
      : true;

    return isSearchTextMatch && isMaterialMatch;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (searchPrice === "low-to-high") {
      return a.price - b.price;
    } else if (searchPrice === "high-to-low") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowCartBox(true);
  };

  const toggleLike = (productId) => {
    setLikedProducts((prevLiked) => {
      if (prevLiked.includes(productId)) {
        return prevLiked.filter((id) => id !== productId);
      } else {
        return [...prevLiked, productId];
      }
    });
  };

  const handleQuantityChange = (event, productId) => {
    const value = parseInt(event.target.value);
    if (isNaN(value) || value < 1) return;

    const product = cart.find((product) => product.id === productId);
    if (product) {
      if (value > product.quantity) {
        for (let i = 0; i < value - product.quantity; i++) {
          increaseQuantity(productId);
        }
      } else if (value < product.quantity) {
        for (let i = 0; i < product.quantity - value; i++) {
          decreaseQuantity(productId);
        }
      }
    }
  };

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  const handleViewProducts = () => {
    navigate("/cart#top"); // Điều hướng đến trang giỏ hàng với anchor #top
  };

  const handleCheckout = () => {
    navigate("/cart#payment"); // Điều hướng đến trang giỏ hàng với anchor #payment
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="order-page">
      <h2>Sản phẩm</h2>
      <p>Thông tin sản phẩm bạn muốn đặt:</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
        >
          <option value="">Sắp xếp theo giá</option>
          <option value="low-to-high">Từ thấp đến cao</option>
          <option value="high-to-low">Từ cao xuống thấp</option>
        </select>
        <select
          value={searchMaterial}
          onChange={(e) => setSearchMaterial(e.target.value)}
        >
          <option value="">Chọn chất liệu</option>
          <option value="Da">Da</option>
          <option value="Vải">Vải</option>
          <option value="Gỗ">Gỗ</option>
        </select>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-container">
              <img src={product.img} alt={product.title} />
              <button
                className={`favorite-btn ${
                  likedProducts.includes(product.id) ? "liked" : ""
                }`}
                onClick={() => toggleLike(product.id)}
              ></button>
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h5>{product.price.toLocaleString()} VNĐ</h5>
              <p>Chất liệu: {product.material}</p>
              <div className="product-actions">
                <button onClick={() => handleAddToCart(product)}>
                  Thêm vào giỏ
                </button>
                <button>Xem thêm</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Giỏ hàng */}
      {showCartBox && (
        <div className="cart-box">
          <div className="cart-box-header">
            <span>Giỏ hàng</span>
            <button onClick={() => setShowCartBox(false)}>X</button>
          </div>
          <ul>
            {cart.length === 0 ? (
              <li>Giỏ hàng của bạn hiện chưa có sản phẩm nào!</li>
            ) : (
              cart.map((product) => (
                <li key={product.id}>
                  <img src={product.img} alt={product.title} width={50} />
                  <span>{product.title}</span>
                  <span>{product.price.toLocaleString()} VNĐ</span>
                  <div className="cart-item-actions">
                    <button onClick={() => handleDecreaseQuantity(product.id)}>
                      -
                    </button>
                    <input
                      type="number"
                      value={product.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(e, product.id)}
                    />
                    <button onClick={() => handleIncreaseQuantity(product.id)}>
                      +
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
          {cart.length > 0 && (
            <div className="cart-actions">
              <button onClick={handleViewProducts}>Xem sản phẩm</button>
              <button onClick={handleCheckout}>Thanh toán</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Order;
