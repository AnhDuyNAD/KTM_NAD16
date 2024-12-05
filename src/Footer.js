// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="logo">
          <img src="img/Anh Duy (2).png" alt="Logo" />
        </div>

        <p>
          Đưa bạn đến thế giới mơ ước của bạn với nhà thiết kế nội thất
          <br />
          Sự hài lòng của bạn là cân nhắc hàng đầu của chúng tôi
        </p>
        <div className="socail-links">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-pinterest-p"></i>
        </div>
      </div>
      <hr />
      <div className="footer-bottom-content">
        <p>
          Designed By: <a href="#">NAD Coding</a>
        </p>
        <div className="copyright">
          <p>
            &#169; <strong>NAD Coding</strong>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
