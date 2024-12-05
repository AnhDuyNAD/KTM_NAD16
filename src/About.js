import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="./img/about-img.png" alt="About" />
      </div>
      <div className="about-text">
        <h3>Sự tươi mới qua từng góc nhìn</h3>
        <p>
          Khách hàng rất quan trọng đối với chúng tôi, sự hài lòng mỗi ngày của
          khách hàng là niềm hãnh diện của chúng tôi. Bước đầu tiên để vượt lên
          kỳ vọng của khách hàng là biết những kỳ vọng đó. Để cuộc sống tươi đẹp
          hơn, được dậy sớm mỗi ngày, làm việc tốt mỗi ngày và cười nhiều hơn
          mỗi ngày hãy đừng ngần ngại chọn chúng tôi. Chúng tôi sẽ cho bạn sự
          tươi mới mỗi ngày......
        </p>
        <button id="about-btn">Xem thêm...</button>
      </div>
    </section>
  );
};

export default About;
