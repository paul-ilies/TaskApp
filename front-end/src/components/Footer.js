import React from "react";
import "./css/footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        Copyright &copy; <span>Ilies Paul Daniel</span> {currentDate}
      </p>
    </div>
  );
};

export default Footer;
