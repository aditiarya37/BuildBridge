import React from "react";
import "./LandingPage.css";
import heroImage from "/src/assets/hero-image.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-container">
        <div className="background-image">
          <img src={heroImage} alt="Hero-Image" />
        </div>
        <div className="content-overlay">
          <div className="content">
            <h1>
              The future of construction hiring, bridging gaps and building trust.
            </h1>
            <Link to="/login" className="get-started-btn">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;