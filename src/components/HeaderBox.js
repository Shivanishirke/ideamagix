import React from "react";

const HeaderBox = ({ icon, label, text }) => {
  return (
    <>
      <div className="box">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="text-section">
          <div className="label">{label}</div>
          <div className="label-text">{text}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderBox;
