import React from "react";
import "./TempLogin.css";
import {Link} from "react-router-dom";
import heroImagetmplgn from "/src/assets/TempLogin-image.jpeg";

const TempLogin = () => {
  return (
    <div className="temp-login">
      <div className="left-section">
        <h1>Connect with trusted contractors</h1>
        <p>Find verified construction professionals for your next project</p>
        <div className="buttons">
          <Link to="/login">
            <button className="post-project-btn">Post a Project</button>
          </Link>
          <Link to="/login">
            <button className="join-contractor-btn">Join as Contractor</button>
          </Link>
        </div>
      </div>
      <div className="right-section">
        <img src={heroImagetmplgn} alt="Hero Image" />
      </div>
    </div>
  );
};

export default TempLogin;