import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const customerInfoString = `
      <h2>Thông tin khách hàng</h2>
      <p>Họ và tên: ${fullName}</p>
      <p>Số điện thoại: ${phoneNumber}</p>
      <p>Email: ${email}</p>
      <h3>Phản hồi</h3>
      <p>${feedback}</p>
    `;

    const serverScriptUrl = "your_server_script.php"; // Thay bằng URL thực tế

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("feedback", feedback);

    fetch(serverScriptUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((newPageContent) => {
        console.log(newPageContent);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    const newWindow = window.open("", "_blank");
    newWindow.document.write(customerInfoString);
    newWindow.document.close();
  };

  return (
    <section className="contact" id="contact">
      <div className="content-text">
        <h2>
          Liên hệ <span> với chúng tôi</span>
        </h2>
        <p>Thiết kế hiện đại cho bạn</p>
        <p>Nâng tầm phong cách ngôi nhà của bạn</p>
        <ul className="list">
          <li>
            <a href="tel:0363026602">SĐT: 0363026602</a>
          </li>
          <li>
            <a href="mailto:anhduysv0603@gmail.com">
              Gmail: anhduysv0603@gmail.com
            </a>
          </li>
          <li>
            <a href="#">Họ và tên: Nguyễn Anh Duy</a>
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <form id="userForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Họ và tên"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="SĐT"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="feedback"
            id="feedback"
            cols="35"
            rows="10"
            placeholder="Phản hồi"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <input type="submit" value="Gửi" className="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
