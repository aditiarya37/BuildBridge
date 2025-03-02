import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    if (isLandingPage) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // Force black navbar on other pages
    }
  }, [isLandingPage]);

  // Hide navbar on the Auth page
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <nav className={`navbar ${isLandingPage && !isScrolled ? "transparent" : "scrolled"}`}>
      <div className="logo">
        <Link to="/" className="nav-item">BuildBridge</Link>
      </div>
      <div className="nav-links">
        {isLandingPage ? (
          <>
            <Link to="/about" className="nav-item">About Us</Link>
            <Link to="/features" className="nav-item">Features</Link>
            <Link to="/login" className="login-btn">Login/Signup</Link>
          </>
        ) : (
          <>
            <Link to="/post-project" className="nav-item">Post a Project</Link>
            <Link to="/browse-project" className="nav-item">Browse Projects</Link>
            <Link to="/profile" className="nav-item">Profile</Link>
            <button className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
