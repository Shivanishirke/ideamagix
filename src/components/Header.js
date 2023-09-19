import React from "react";
import "./Header.css";
import HeaderBox from "./HeaderBox";

const headerBoxes = [
  {
    icon: "https://static.thenounproject.com/png/3627166-200.png",
    label: "Second Medical Opinion",
    text: "Book Consultation",
  },
  {
    icon: "https://t4.ftcdn.net/jpg/00/82/56/67/360_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg",
    label: "Call us on",
    text: "985 896 2222",
  },
  {
    icon: "https://t3.ftcdn.net/jpg/05/28/88/82/360_F_528888239_McOPggZGBdHru8vpQjuad3aez4yyNTJS.jpg",
    label: "Email us on",
    text: "info@mediretreats.com",
  },
];

function Header() {
  return (
    <>
      <div className="section container">
        <div className="header">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4507/4507860.png"
            alt="logo"
            className="logo"
          />
        </div>

        {headerBoxes.map(({ icon, label, text }) => (
          <HeaderBox icon={icon} label={label} text={text} />
        ))}
      </div>

      <div className="menu">
        <div className="section container2">
          <div>Home</div>
          <div>About Us</div>
          <div>Treatments +</div>
          <div>Destinations +</div>
          <div>Hospitals</div>
          <div>FAQs</div>
          <div>Blog</div>
          <div>Request A Quote</div>
          <input className="search-bar" type="searchbar" placeholder="Search" />
        </div>
      </div>

      <div className="hero">
        <div className="section">
          <div className="breadcrumb pb-16">
            Home <span className="arrow">{">"}</span> Treatments
            <span className="arrow">{">"}</span> Orthopaedics
            <span className="arrow">{">"}</span> Knee Replacement
          </div>
          <div className="text-header pb-16">Total Knee Replacement</div>
          <div className=" pb-16">
            Total knee replacement is a surgery to remove and replace the whole
          </div>
          <div className=" pb-16">
            damaged knee joint with an artificial joint
          </div>
          <div className="btn  pb-16">
            <button className="enquire-btn">Enquire Now</button>
          </div>
        </div>
        <div className="section2"></div>
      </div>
    </>
  );
}

export default Header;
