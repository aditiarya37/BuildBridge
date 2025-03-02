import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./User-Dashboard.css";
import coverImage from "/src/assets/cover-image.webp";
import profileImage from "/src/assets/profile-image.jpeg";
import plusIcon from "/src/assets/plus.png";

const UserDashboard = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const handleRedirect = () => {
        window.location.href = "https://construction-model.streamlit.app/";
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || user.userType !== "user") {
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
                    <h1>Tanisha Jain</h1>
                    <h2>{userData.email.split("@")[0]}</h2> 
                    <h3>PERSONAL INFORMATION:</h3>
                    <p><strong>Name:</strong> {userData.email.split("@")[0]}</p>
                    <p><strong>Username:</strong> {userData.email.split("@")[0]}</p>
                    <p><strong>Phone:</strong> 93674-77392</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <button onClick={handleRedirect} className="try-it-btn" style={{marginTop: "30px"}}>TRY AI-Driven Matching</button>
                </div>

                {/* Right Side - Projects Posted */}
                <div className="projects-section">
                    <h3>PROJECTS POSTED:</h3>
                    <div className="projects-box">
                        <div className="projects-box-text">No Projects Posted Yet.
                            <Link to="/post-project" className="add-project-btn">
                                <img className="plus-icon" src={plusIcon} alt="Add" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
