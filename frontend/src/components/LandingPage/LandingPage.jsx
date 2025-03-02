import React from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import heroImage from "/src/assets/hero-image.png";
import { Link } from "react-router-dom";

const sentence = "The future of construction hiring, bridging gaps and building trust.";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-container">
        <div className="background-image">
          <img src={heroImage} alt="Hero-Image" />
        </div>
        <div className="content-overlay">
          <div className="content">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1, // Adds a pause between cycles
                  },
                },
              }}
            >
              {sentence.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  transition={{ duration: 0.05, delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
