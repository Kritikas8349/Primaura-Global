import "./Footer.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Backend API Call Here

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <section className="footer-section">
        <div className="footer-overlay"></div>

        <div className="footer-container">
          {/* LEFT */}

          <div className="footer-left">
            <span className="footer-subtitle">Have Any Questions?</span>

            <h2>Let's Connect</h2>

            <h4>We're Here to Help</h4>

            <p>
              Whether you're looking for a reliable export partner, requesting
              product details, exploring new business opportunities or seeking
              seamless export support, our experienced team is here to assist
              you. Share your requirements and we'll get back to you with the
              right solution.
            </p>

            <div className="footer-info">
              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h5>Email</h5>
                  <p>info@company.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>

                <div>
                  <h5>Phone</h5>
                  <p>+91 9876543210</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="footer-form-box">
            <span className="form-small-title">Have Any Questions?</span>

            <h2>Quick Enquiry</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone (+91)"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* ===========================
BOTTOM FOOTER
=========================== */}

      <footer className="footerMinimal">
        <div className="footerMinimalContainer">
          {/* LEFT */}

          <div className="footerLeft">
            <img src={logo} alt="PrimAura" className="footerLogo" />
          </div>

          {/* CENTER */}

          <div className="footerCenter">
            <ul className="footerMenu">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/products">Products</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <p className="footerCopyright">
              © 2026 PrimAura. All Rights Reserved.
            </p>
          </div>

          {/* RIGHT */}

          <div className="footerRight">
            <div className="footerSocial">
              <a
                href="https://www.facebook.com/share/1JQFkMjBZi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/primaura_global?igsh=YjE5aXB3MHA2d2t5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <a href="mailto:info@primaura.com" className="footerEmail">
              info@primaura.com
            </a>
          </div>
        </div>
      </footer>

      {/* ===========================
END
=========================== */}
    </>
  );
};

export default Footer;
