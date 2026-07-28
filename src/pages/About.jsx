import React from "react";
import "./About.css";
import { FaAward, FaGlobeAsia } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { PiTargetBold } from "react-icons/pi";

import visionImage from "../assets/vision-image.png";
import shipImage from "../assets/about-ship.png";
import bgImage from "../assets/about-bg.png";
import qualityImg from "../assets/quality.png";
import sustainabilityImg from "../assets/sustainable.png";
import customerImg from "../assets/customer.png";

const About = () => {
  return (
    <>
    <section
      className="about-section"
      style={{
        backgroundImage: ` url(${bgImage})`,
      }}
    >
      <div className="about-container">
        {/* LEFT CONTENT */}

        <div className="about-content">
          <span className="about-subtitle">
            ROOTED IN INDIA • REACHING THE WORLD
          </span>

          <h2>
            About <span>Primaura Global</span>
          </h2>

          <div className="title-line"></div>

          <p>
            Primaura Global is a trusted merchant exporter of premium quality
            Indian spices, powders, and agricultural products. Rooted in India
            and connected to the world, we bring authenticity, flavor, and
            purity to global markets.
          </p>

          <div className="about-features">
            <div className="feature-card">
              <div className="icon-box">
                <FaAward />
              </div>

              <div>
                <h4>100% Natural</h4>
                <span>& Premium Quality</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="icon-box">
                <FaGlobeAsia />
              </div>

              <div>
                <h4>Global Reach</h4>
                <span>Local Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ------------------------------------------SECTION2 --------------------------*/}

    <section className="aboutInfoSection">
      <div className="aboutInfoContainer">

        <div className="aboutInfoImage">
          <img src={shipImage} alt="Ship" />
        </div>

        <div className="aboutInfoContent">

          <span className="aboutInfoSubtitle">
            WHO WE ARE
          </span>

          <h2>
            Delivering India's Finest
            <br />
            Ingredients to the World
          </h2>

          <p>
            With a deep understanding of quality, consistency, and
            international trade, Primaura Global is committed to delivering
            excellence in every shipment. We work closely with trusted
            farmers, processors, and logistics partners to ensure seamless
            export services and long-term partnerships.
          </p>

          <div className="aboutInfoStats">

            <div className="statItem">
              <h3>50+</h3>
              <span>Global Partners</span>
            </div>

            <div className="statItem">
              <h3>100+</h3>
              <span>Premium Products</span>
            </div>

            <div className="statItem">
              <h3>20+</h3>
              <span>Countries Exported</span>
            </div>

          </div>

        </div>

      </div>
    </section>

    {/* -------------------------------------------------SECTION 3------------------------*/}
    <section className="commitmentSection">

      <div className="commitmentContainer">

        <span className="commitmentSubHeading">
          OUR COMMITMENT
        </span>

        <h2 className="commitmentHeading">
          Quality. Trust. Global Partnership.
        </h2>

        <div className="commitmentLine"></div>

        <div className="commitmentCards">

          <div className="commitmentCard">

            <div className="commitmentImage">
              <img src={qualityImg} alt="Quality Assurance" />
            </div>

            <h3>Quality Assurance</h3>

            <p>
              Every product is carefully sourced
              and inspected to meet international
              quality standards.
            </p>

          </div>

          <div className="commitmentCard">

            <div className="commitmentImage">
              <img src={sustainabilityImg} alt="Ethical & Sustainable" />
            </div>

            <h3>Ethical & Sustainable</h3>

            <p>
              We believe in responsible sourcing,
              fair practices, and building a
              sustainable supply chain.
            </p>

          </div>

          <div className="commitmentCard">

            <div className="commitmentImage">
              <img src={customerImg} alt="Customer Commitment" />
            </div>

            <h3>Customer Commitment</h3>

            <p>
              Our customers' success is our
              priority. We ensure transparency,
              reliability, and timely delivery.
            </p>

          </div>

        </div>

      </div>

    </section>

    {/* -------------------------------------Section 4: Vision and Mission----------------------------- */}

     <section className="visionSection-A">

  <div className="visionContainer-A">

    <div className="visionImage-A">
      <img src={visionImage} alt="Vision" />
    </div>

    <div className="visionContent-A">

      <div className="visionItem-A">

        <div className="visionIcon-A">
          <FiEye />
        </div>

        <div className="visionText-A">
          <span>OUR VISION</span>

          <p>
            To be a globally recognized exporter of Indian spices and agricultural
            products...
          </p>
        </div>

      </div>

      <div className="visionDivider-A"></div>

      <div className="visionItem-A">

        <div className="visionIcon-A">
          <PiTargetBold />
        </div>

        <div className="visionText-A">
          <span>OUR MISSION</span>

          <p>
            To deliver premium quality products with consistency...
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
    </>
  );
};

export default About;
