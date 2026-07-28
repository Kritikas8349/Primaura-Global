import "./Contact.css";
import bgImage from "../assets/contact-bg.png"; // apni image ka path yaha de
import mapImg from "../assets/map.png"; // apni image ka path yaha de
import phoneIMG from "../assets/contact-bg-phone.png"; // apni image ka path yaha de
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <div className="contact-banner">
          <div className="contact-content">
            <h1>Contact Us</h1>

            <p>
              Home <span>/</span> Contact
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
    CONTACT DETAILS
=========================== */}

      <section className="contact-details">
        <div className="contact-details-container">
          {/* Left */}

          <div className="contact-map">
            <img src={mapImg} alt="World Map" className="map-image" />
          </div>

          {/* Right */}

          <div className="contact-info">
            <span className="contact-subtitle">Contact Us</span>

            <h2>Get in Touch</h2>

            <div className="info-card">
              <div className="info-icon">
                <FiMapPin />
              </div>

              <p>Noida, (UP) India - 201301</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiMail />
              </div>

              <div>
                <p>primaura.global@gmail.com</p>
                <p>founder@primauraglobal.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone />
              </div>

              <p>+91 93192 94022</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
    CONTACT FORM
=========================== */}

      <section className="contact-form-section">
        <div className="contact-form-container">
          <span className="form-subtitle">Have Any Questions?</span>

          <h2>Leave A Message</h2>

          <form className="contact-form">
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email" />

            <div className="phone-input">
              <select>
                <option>Algeria (+213)</option>
                <option>India (+91)</option>
                <option>USA (+1)</option>
                <option>UAE (+971)</option>
              </select>

              <input type="tel" placeholder="Phone Number" />
            </div>

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
