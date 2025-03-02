import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <h2 className="features-title">How BuildBridge Works</h2>
      <div className="features-container">
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-folder-open"></i>
          </div>
          <h3>Post Your Project</h3>
          <p>Describe your needs, budget, and timeline</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-handshake"></i> 
          </div>
          <h3>Get Matched</h3>
          <p>Receive bids from verified contractors</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-shield-alt"></i> 
          </div>
          <h3>Work Safely</h3>
          <p>Secure payments and dispute resolution</p>
        </div>
      </div>
    </div>
  );
};

export default Features;