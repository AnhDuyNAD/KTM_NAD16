import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getCartTotal,
    getCartCount,
  } = useCart(); // Lấy các chức năng và dữ liệu từ CartContext

  // States để lưu thông tin thanh toán
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hàm cuộn đến phần thanh toán khi có hash #payment
  useEffect(() => {
    if (window.location.hash === "#payment") {
      const paymentSection = document.getElementById("payment");
      if (paymentSection) {
        paymentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Xử lý gửi form thanh toán
  const handlePayment = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Giả lập quá trình thanh toán (có thể gửi thông tin lên server ở đây)
    setTimeout(() => {
      alert("Thanh toán thành công!");
      setIsSubmitting(false);
      // Sau khi thanh toán thành công, bạn có thể điều hướng về trang khác nếu muốn
      // window.location.href = "/thank-you"; // Điều hướng sau thanh toán
    }, 2000);
  };

  return (
    <div className="cart-page" id="top">
      <h1>Giỏ hàng của bạn</h1>

      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn hiện không có sản phẩm nào.</p>
      ) : (
        <div>
          {/* Hiển thị các sản phẩm trong giỏ hàng */}
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.title} width={100} />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>Giá: {item.price.toLocaleString()} VNĐ</p>
                  <p>Số lượng: {item.quantity}</p>
                  <p>
                    Tổng: {(item.price * item.quantity).toLocaleString()} VNĐ
                  </p>
                  <div>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Hiển thị tổng tiền giỏ hàng */}
          <div className="cart-summary" id="payment">
            <h3>Tổng tiền: {getCartTotal().toLocaleString()} VNĐ</h3>
          </div>

          {/* Form thanh toán */}
          <div className="payment-form">
            <h2>Thông tin thanh toán</h2>
            <form onSubmit={handlePayment}>
              <div>
                <label htmlFor="name">Tên khách hàng</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="address">Địa chỉ giao hàng</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Đang xử lý..." : "Thanh toán"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
