import React, { useState, useEffect } from "react";

const Countdown = () => {
  // Đặt thời gian đích đến ngày 24/12/2024
  const targetDate = new Date("2024-12-24T00:00:00"); // Countdown đến 00:00 ngày 24/12/2024

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000), // Tính giây
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Dọn dẹp sau khi component bị unmount
    return () => clearInterval(timer);
  }, []);

  // Nếu thời gian đếm ngược đã kết thúc, hiển thị thông báo
  if (Object.keys(timeLeft).length === 0) {
    return <div>Countdown finished!</div>;
  }

  return (
    <div id="countdown" style={styles.countdown}>
      <h2 style={styles.heading}>Countdown to Christmas Eve!</h2>
      <div style={styles.timerContainer}>
        <div style={styles.timeUnit}>
          <div style={styles.timeValue}>{timeLeft.weeks}</div>
          <div style={styles.timeLabel}>Weeks</div>
        </div>
        <div style={styles.timeUnit}>
          <div style={styles.timeValue}>{timeLeft.days}</div>
          <div style={styles.timeLabel}>Days</div>
        </div>
        <div style={styles.timeUnit}>
          <div style={styles.timeValue}>{timeLeft.hours}</div>
          <div style={styles.timeLabel}>Hours</div>
        </div>
        <div style={styles.timeUnit}>
          <div style={styles.timeValue}>{timeLeft.minutes}</div>
          <div style={styles.timeLabel}>Minutes</div>
        </div>
        <div style={styles.timeUnit}>
          <div style={styles.timeValue}>{timeLeft.seconds}</div>
          <div style={styles.timeLabel}>Seconds</div> {/* Thêm Seconds */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  countdown: {
    textAlign: "center",
    fontSize: "24px",
    marginTop: "20px",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    width: "80%",
    margin: "0 auto",
    border: "2px solid #388E3C", // Đường viền màu xanh lá
    fontFamily: "Pacifico, sans-serif", // Phông chữ Giáng Sinh
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2017/11/13/13/34/santa-claus-2945633_1280.jpg)", // Thêm URL hình ảnh của bạn ở đây
    backgroundSize: "cover", // Đảm bảo hình ảnh phủ kín màn hình
    backgroundPosition: "center center", // Đặt hình ảnh ở trung tâm
  },
  heading: {
    color: "#fff",
    fontSize: "32px",
    marginBottom: "20px",
    fontFamily: "Pacifico, sans-serif",
    animation: "blink 1.5s infinite alternate", // Hiệu ứng nhấp nháy cho tiêu đề
  },
  timerContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  timeUnit: {
    textAlign: "center",
    backgroundColor: "#388E3C", // Màu nền của mỗi ô
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "100px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    animation: "colorChange 2s infinite alternate", // Hiệu ứng đổi màu cho các ô
  },
  timeValue: {
    fontSize: "40px", // Kích thước chữ lớn cho các số
    fontWeight: "bold",
  },
  timeLabel: {
    fontSize: "16px", // Kích thước chữ nhỏ cho nhãn
    marginTop: "10px",
    fontFamily: "Arial, sans-serif",
  },
};

export default Countdown;
