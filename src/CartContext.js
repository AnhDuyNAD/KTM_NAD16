import React, { createContext, useContext, useState } from "react";

// Context Cart
const CartContext = createContext();

// Hook tùy chỉnh để sử dụng CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider để cung cấp context cho các component con
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    if (!product || !product.id) return; // Kiểm tra nếu sản phẩm không hợp lệ

    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        // Nếu sản phẩm đã có trong giỏ, chỉ tăng số lượng lên 1
        return prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 } // Tăng số lượng
            : item
        );
      } else {
        // Nếu sản phẩm chưa có trong giỏ, thêm mới vào giỏ với số lượng 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Hàm tăng số lượng sản phẩm trong giỏ
  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 }; // Tăng số lượng
        }
        return item;
      });
    });
  };

  // Hàm giảm số lượng sản phẩm trong giỏ
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 }; // Giảm số lượng 1 đơn vị
            } else {
              return null; // Số lượng = 1 thì không giảm, sẽ xóa sản phẩm khỏi giỏ
            }
          }
          return item;
        })
        .filter((item) => item !== null); // Lọc bỏ sản phẩm đã xóa
    });
  };

  // Hàm xóa sản phẩm khỏi giỏ
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Hàm lấy tổng số lượng giỏ hàng
  const getCartCount = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  // Hàm tính tổng giá trị giỏ hàng
  const getCartTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getCartCount,
        getCartTotal, // Trả về tổng giá trị giỏ hàng
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
