import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">ABOUT US</h2>
      <div className="about-content">
        <div className="about-card">
          <h3>OUR VISION</h3>
          <p>
            Revolutionizing Construction Hiring<br />
            We aim to make finding trusted constructors as seamless as booking a ride—powered by AI, transparency, and secure transactions.
          </p>
        </div>
        <div className="about-card">
          <h3>OUR MISSION</h3>
          <p>
            Bridging the Gap<br />
            We connect homeowners, businesses, and vetted constructors, ensuring fair competition, efficient matching, and seamless project execution.
          </p>
        </div>
        <div className="about-card">
          <h3>WHAT WE DO?</h3>
          <p>
            Smart Matching & Secure Collaboration<br />
            With AI-driven matching, competitive bidding, escrow payments, and contract management, we create a trustworthy and hassle-free construction experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;