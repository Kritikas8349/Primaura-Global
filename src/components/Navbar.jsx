import { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Products", "About us", "Contact us"];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}

        <div className="logo">
          <img src={logo} alt="PrimAura Logo" className="logo-img" />
        </div>
        {/* Desktop Menu */}

        <ul className="nav-links">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>

        {/* Button */}

        <button className="contact-btn">
          GET IN TOUCH
          <FiArrowRight />
        </button>
      </div>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {navLinks.map((item, index) => (
          <a href="/" key={index} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}

        <button className="mobile-btn">
          GET IN TOUCH
          <FiArrowRight />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
