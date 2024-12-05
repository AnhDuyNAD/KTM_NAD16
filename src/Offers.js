import React from "react";

const Offers = () => {
  return (
    <section className="offers">
      <div className="offer-content">
        <div className="row">
          <i className="fa-solid fa-truck-fast"></i>
          <h3>Free ship</h3>
          <p>Giao hàng và vận chuyển</p>
        </div>
        <div className="row">
          <i className="fa-solid fa-headset"></i>
          <h3>Hỗ trợ 24/7</h3>
          <p>Phục vụ tận tình chu đáo mọi lúc</p>
        </div>
        <div className="row">
          <i className="fa-solid fa-rotate-left"></i>
          <h3>30 ngày hoàn trả</h3>
          <p>Nhu cầu hoàn trả thoải mái trong khi bạn mua hàng</p>
        </div>
        <div className="row">
          <i className="fa-solid fa-cart-shopping"></i>
          <h3>Nội thất chất lượng</h3>
          <p>Bảo đảm và tiện nghi</p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
