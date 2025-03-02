import React from "react";
import {Link} from "react-router-dom";
import "./AIFeature.css";

const AIFeature = () => {
  return (
    <div className="ai-feature">
      <h2 className="ai-title">AI-Powered Smart Matching</h2>
      <p className="ai-description">
        At BuildBridge, we leverage cutting-edge AI to make construction hiring seamless and efficient. Our smart algorithms analyze project requirements, budget, location, and contractor expertise to suggest the best matches instantly. This reduces the time to hire by 40%, ensures fair competition, and helps users make data-driven decisions.
        <br />
        With AI-driven insights, automated bidding recommendations, and fraud detection, BuildBridge ensures transparency, efficiency, and trust in every project.
      </p>
      <Link to="/login">
        <button className="try-it-btn">TRY IT</button>
      </Link>
    </div>
  );
};

export default AIFeature;