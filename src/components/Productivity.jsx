import React from "react";
import product from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";

function Productivity() {
  return (
    <div className="product-section">
      <div className="product-image">
        <img src={product} alt="Stay productive" />
      </div>
      <div className="text-section">
        <div className="title">Stay productive, wherever you are</div>
        <div className="description">
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <br />
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="product-btn">
          See how Fylo works
          <span>
            <img src={arrow} alt="icon" className="arrow-icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Productivity;
