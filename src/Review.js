import React from "react";

const Review = () => {
  return (
    <section className="review" id="review">
      <div className="main-txt">
        <h3>
          Đánh <span>Giá</span>
        </h3>
      </div>
      <div className="box">
        <div className="img">
          <img src="img/IMG_7139.png" alt="Nguyễn Anh Duy" />
        </div>
        <h3>Nguyễn Anh Duy</h3>
        <div className="star">
          <i className="fa-solid fa-star checked"></i>
          <i className="fa-solid fa-star checked"></i>
          <i className="fa-solid fa-star checked"></i>
          <i className="fa-solid fa-star checked"></i>
          <i className="fa-solid fa-star checked"></i>
        </div>
        <p>.............................................</p>
      </div>
    </section>
  );
};

export default Review;
