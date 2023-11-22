import "./Menu.scss";
import AspireLogo from "./Assets/Logo.svg"; // Import the SVG file
import Card_Icon from "./Assets/Card_Icon.svg"; // Import the SVG file
import Credit_Icon from "./Assets/Credit_Icon.svg"; // Import the SVG file
import Home_Icon from "./Assets/Home_Icon.svg"; // Import the SVG file
import Payments_Icon from "./Assets/Payments_Icon.svg"; // Import the SVG file
import Settings_Icon from "./Assets/Settings_Icon.svg"; // Import the SVG file

function Menu() {
  return (
    <div className="menu">
      <div className="logo-container">
        <div className="logo">
          <img src={AspireLogo} alt="Aspire Logo" className="logo" />
        </div>
        <div className="logo-description">
          Trusted way of banking for 3000+ SMEs and startups in Singapore
        </div>
      </div>

      <div className="menu-list">
        <li>
          <img src={Home_Icon} alt="Home_Icon" className="menu-icon" />
          <span className="menu-name inline">Home</span>
        </li>
        <li>
          <img src={Card_Icon} alt="Card_Icon" className="menu-icon" />
          <span className="menu-name">Cards</span>
        </li>
        <li>
          <img src={Payments_Icon} alt="Payments_Icon" className="menu-icon" />
          <span className="menu-name">Payments</span>
        </li>
        <li>
          <img src={Credit_Icon} alt="Credit_Icon" className="menu-icon" />
          <span className="menu-name">Credit</span>
        </li>
        <li>
          <img src={Settings_Icon} alt="Settings_Icon" className="menu-icon" />
          <span className="menu-name">Settings</span>
        </li>
      </div>
    </div>
  );
}

export default Menu;
