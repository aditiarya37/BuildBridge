import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./User-Dashboard.css";
import coverImage from "/src/assets/cover-image.webp";
import profileImage from "/src/assets/profile-image.jpeg";
import plusIcon from "/src/assets/plus.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import star icons

const ConstructorDashboard = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || user.userType !== "constructor") {
            navigate("/login"); // Redirect if not logged in or incorrect type
        } else {
            setUserData(user);
        }
    }, [navigate]);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="dashboard-container">
            {/* Cover Image Section */}
            <div className="cover-image" style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="profile-pic">
                    <img src={profileImage} alt="Profile" />
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="dashboard-content">
                {/* Left Side - Personal Information */}
                <div className="personal-info">
                    <h2>{userData.email.split("@")[0]}</h2> 

                    {/* Star Rating */}
                    <div className="star-rating">
                        <FaStar color="gold" />
                        <FaStar color="gold" />
                        <FaStar color="gold" />
                        <FaStar color="gold" />
                        <FaStarHalfAlt color="gold" />
                        <span> (374)</span>
                    </div>

                    <h3>PERSONAL INFORMATION:</h3>
                    <p><strong>Name:</strong> {userData.email.split("@")[0]}</p>
                    <p><strong>Username:</strong> {userData.email.split("@")[0]}</p>
                    <p><strong>Phone:</strong> 93674-77392</p>
                    <p><strong>Email:</strong> {userData.email}</p>

                    {/* Reviews Section */}
                    <h3>REVIEWS:</h3>
                    <p><strong>Quality:</strong> 97%</p>
                    <p><strong>Customer Satisfaction:</strong> 84%</p>
                    <p><strong>On Time:</strong> 94%</p>

                    {/* Experience Section */}
                    <h3>EXPERIENCE:</h3>
                    <p>5+ years in construction and renovation projects.</p>
                </div>

                {/* Right Side - Projects Taken & Client Testimonials */}
                <div className="projects-section">
                    <h3>PROJECTS TAKEN:</h3>
                    <div className="projects-box-con">
                        <div className="projects-box-text">No Projects Taken Yet.
                            <Link to="/browse-project" className="add-project-btn">
                                <img className="plus-icon" src={plusIcon} alt="Add" />
                            </Link>
                        </div>
                        <h3>Client Testimonials:</h3>
                        <div className="testimonial-box">
                            <div className="testimonial-profile"></div>
                            <p>
                                "BuildBridge made my home renovation project so much easier! I found a highly-rated contractor within days, and the secure escrow payment system gave me complete peace of mind. The AI matching feature ensured I got bids from professionals who fit my budget and needs perfectly!"  
                                <strong> – Amit Sharma, Homeowner</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructorDashboard;
