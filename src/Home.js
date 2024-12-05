import React, { useState, useEffect } from "react";

const Home = () => {
  // Mảng chứa các URL ảnh nền
  const images = [
    "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/08/06/24/ai-generated-9182574_1280.png",
    "./img/background-img.png",
  ];

  // State để theo dõi ảnh nền hiện tại
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Tự động chuyển ảnh mỗi 10 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  // Hàm chuyển ảnh sang trái
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Hàm chuyển ảnh sang phải
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="main-text">
        <h1>
          Khám phá điều tốt <br />
          Nội thất cho bạn
        </h1>
        <p>
          Sự lựa chọn của bạn là ưu tiên hàng đầu và quan trọng nhất của chúng
          tôi
        </p>
        <p>Đưa bạn đến thế giới mơ ước của bạn với nhà thiết kế nội thất</p>
        <button id="btn">Xem thêm</button>
      </div>
      {/* Các nút điều khiển */}
      <div className="controls">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>
      {/* Các dấu chấm chỉ báo */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImageIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
