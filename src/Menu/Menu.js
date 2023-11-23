import { Link } from "react-router-dom";

import "./Menu.scss";
import AspireLogo from "../Assets/Menu/Logo.svg"; // Import the SVG file
import Card_Icon from "../Assets/Menu/Card_Icon.svg"; // Import the SVG file
import Credit_Icon from "../Assets/Menu/Credit_Icon.svg"; // Import the SVG file
import Home_Icon from "../Assets/Menu/Home_Icon.svg"; // Import the SVG file
import Payments_Icon from "../Assets/Menu/Payments_Icon.svg"; // Import the SVG file
import Settings_Icon from "../Assets/Menu/Settings_Icon.svg"; // Import the SVG file

function Menu() {
  return (
    <div className="menu">
      <div className="logo-container">
        <Link to={"/"}>
          <div className="logo">
            <img src={AspireLogo} alt="Aspire Logo" className="logo" />
          </div>
        </Link>
        <div className="logo-description">
          Trusted way of banking for 3000+ SMEs and startups in Singapore
        </div>
      </div>

      <div className="menu-list">
        <li>
          <Link to={"/"}>
            <img src={Home_Icon} alt="Home_Icon" className="menu-icon" />
            <span className="menu-name inline">Home</span>
          </Link>
        </li>
        <li>
          <Link to={"/cards"}>
            <img src={Card_Icon} alt="Card_Icon" className="menu-icon" />
            <span className="menu-name">Cards</span>
          </Link>
        </li>
        <li>
          <Link to={"/payment"}>
            <img
              src={Payments_Icon}
              alt="Payments_Icon"
              className="menu-icon"
            />
            <span className="menu-name">Payments</span>
          </Link>
        </li>
        <li>
          <Link to={"/credit"}>
            <img src={Credit_Icon} alt="Credit_Icon" className="menu-icon" />
            <span className="menu-name">Credit</span>
          </Link>
        </li>
        <li>
          <Link to={"/settings"}>
            <img
              src={Settings_Icon}
              alt="Settings_Icon"
              className="menu-icon"
            />
            <span className="menu-name">Settings</span>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Menu;
