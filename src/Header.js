import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // Import hook từ CartContext

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State để lưu trữ từ khóa tìm kiếm
  const [lastScrollY, setLastScrollY] = useState(0); // Vị trí cuộn trước đó
  const [visible, setVisible] = useState(true); // Trạng thái hiển thị của header

  const { getCartCount } = useCart(); // Lấy số lượng giỏ hàng từ CartContext
  const navigate = useNavigate();

  // Hàm kiểm tra vị trí cuộn trang
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log("currentScrollY", currentScrollY); // Debug thông số cuộn

    if (currentScrollY > lastScrollY) {
      setVisible(false); // Cuộn xuống, ẩn header
    } else {
      setVisible(true); // Cuộn lên, hiển thị header
    }

    setLastScrollY(currentScrollY);

    if (currentScrollY > 100) {
      setIsScrolled(true); // Khi cuộn qua 100px, đổi sang sticky
    } else {
      setIsScrolled(false);
    }
  };

  // Hàm xóa từ khóa tìm kiếm khi người dùng bấm "X"
  const clearSearch = () => {
    setSearchTerm("");
    setShowSearch(false);
  };

  // Hàm điều hướng đến trang giỏ hàng
  const goToCartPage = () => {
    navigate("/cart");
  };

  // Sử dụng useEffect để đăng ký sự kiện cuộn trang
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`header ${isScrolled ? "sticky" : ""} ${
        showSearch ? "show-search" : ""
      } ${visible ? "" : "hidden"}`}
    >
      <nav>
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img
                src="img/Anh Duy (2).png"
                style={{ width: "70px", height: "70px" }}
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/" id="first">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="#about">Về</Link>
            </li>
            <li>
              <Link to="/order">Các sản phẩm</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ với chúng tôi</Link>
            </li>
            <li>
              <Link to="/review">Đánh giá</Link>
            </li>
            <li>
              <Link to="#">Góc ý tưởng</Link>
            </li>
          </ul>
        </div>

        {/* Biểu tượng tìm kiếm */}
        <label
          htmlFor="show-search"
          className="search-icon"
          onClick={() => setShowSearch(!showSearch)} // Toggle search visibility
        >
          <i className="fas fa-search"></i>
        </label>

        {/* Thanh tìm kiếm */}
        {showSearch && (
          <form action="#" className="search-box">
            <input
              type="text"
              placeholder="Tìm kiếm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật từ khóa tìm kiếm
              required
            />
            <button type="submit" className="go-icon">
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>

            {/* Biểu tượng X để xóa tìm kiếm */}
            <button type="button" className="clear-icon" onClick={clearSearch}>
              <i className="fas fa-times"></i>
            </button>
          </form>
        )}

        {/* Biểu tượng giỏ hàng */}
        <label
          htmlFor="show-search"
          className="cart-icon"
          onClick={goToCartPage}
        >
          <i className="fas fa-shopping-cart"></i>
          {/* Hiển thị số lượng sản phẩm trong giỏ nếu có */}
          {getCartCount() > 0 && (
            <span className="cart-count">{getCartCount()}</span>
          )}
        </label>
      </nav>
    </div>
  );
};

export default Header;
