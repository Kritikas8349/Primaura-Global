import "./Footer.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

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
                  <FaLocationDot />
                </div>

                <div>
                  <h5>Office</h5>
                  <p>India</p>
                </div>
              </div>

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

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          {/* Logo */}

          <div className="footer-col footer-brand">
            <img src={logo} alt="PrimAura Logo" className="bottom-logo" />

            <p>
              Premium exporter delivering quality products worldwide with
              trusted sourcing and timely delivery.
            </p>

            <div className="social-links">
              <a href="/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="/">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="/">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Pages */}

          <div className="footer-col">
            <h4>Pages</h4>

            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Products */}

          <div className="footer-col">
            <h4>Our Products</h4>

            <ul>
              <li>
                <a href="/">Essential Oils</a>
              </li>
              <li>
                <a href="/">Grains</a>
              </li>
              <li>
                <a href="/">Spices</a>
              </li>
              <li>
                <a href="/">Makhana</a>
              </li>
              <li>
                <a href="/">Mango Pulp</a>
              </li>
              <li>
                <a href="/">Tissue Paper</a>
              </li>
              <li>
                <a href="/">Healthy Snacks</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div className="footer-col newsletter">
            <h4>Newsletter</h4>

            <p>Subscribe to receive export updates and latest products.</p>

            <form>
              <input type="email" placeholder="Your Email" />

              <button type="submit">Subscribe</button>
            </form>
          </div>

          {/* Contact */}

          <div className="footer-col contact-info">
            <h4>Contact</h4>

            <p>
              <i className="fa-solid fa-location-dot"></i>
              &nbsp; Noida, Uttar Pradesh, India
            </p>

            <p>
              <i className="fa-solid fa-phone"></i>
              &nbsp; +91 9876543210
            </p>

            <p>
              <i className="fa-solid fa-envelope"></i>
              &nbsp; info@primaura.com
            </p>

            <p>
              <i className="fa-solid fa-envelope"></i>
              &nbsp; sales@primaura.com
            </p>
          </div>
        </div>

        {/* Copyright */}

        <div className="footer-copyright">
          <p>© 2026 PrimAura. All Rights Reserved.</p>

          <div className="footer-policy">
            <a href="/">Terms &amp; Conditions</a>

            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* ===========================
END
=========================== */}
    </>
  );
};

export default Footer;
