import React from "react";
import "./thanku.css";

function Thanku() {
  return (
    <div className="thanku-page">
      <div className="thanku-box">
        <h1>🎉 Thank You!</h1>
        <p>Your message has been sent successfully.</p>
        <a href="/" className="back-btn">
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default Thanku;
