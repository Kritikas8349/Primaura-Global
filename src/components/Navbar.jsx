import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import logo from "../assets/logo.png";
import InquiryPopup from "../components/InquiryPopup";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInquiryPopup, setShowInquiryPopup] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="PrimAura Logo" className="logo-img" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
  className="contact-btn"
  onClick={() => setShowInquiryPopup(true)}
>
  GET IN TOUCH
  <FiArrowRight />
</button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {item.name}
          </NavLink>
        ))}

<button
  className="mobile-btn"
  onClick={() => {
    setMenuOpen(false);
    setShowInquiryPopup(true);
  }}
>
  GET IN TOUCH
  <FiArrowRight />
</button>
      </div>

      <InquiryPopup
  isOpen={showInquiryPopup}
  onClose={() => setShowInquiryPopup(false)}
/>
    </header>
  );
};

export default Navbar;
