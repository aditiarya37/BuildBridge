import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css";
import logo from "/src/assets/logo.png";

function AuthModal() {
    const [authType, setAuthType] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("user"); // Default selection is User
    const navigate = useNavigate();

    const handleAuth = () => {
        // Simulating authentication
        const userData = { email, userType };
        localStorage.setItem("user", JSON.stringify(userData)); // Save user details in localStorage

        // Redirecting based on user type
        if (userType === "user") {
            navigate("/user-dashboard");
        } else {
            navigate("/constructor-dashboard");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                {/* Left Side - Form */}
                <div className="auth-form">
                    <div className="auth-header">
                        <img src={logo} alt="BuildBridge" className="auth-logo" />
                        <h1>BuildBridge</h1>
                        <button 
                            className="switch-auth-btn" 
                            onClick={() => setAuthType(authType === "login" ? "signup" : "login")}
                        >
                            {authType === "login" ? "Sign Up" : "Login"}
                        </button>
                    </div>

                    <h3>{authType === "login" ? "Login" : "Sign Up"}</h3>

                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    {/* Dropdown to Select User Type */}
                    <select value={userType} onChange={(e) => setUserType(e.target.value)} className="user-type-dropdown">
                        <option value="user">User</option>
                        <option value="constructor">Constructor</option>
                    </select>

                    {authType === "login" && <p className="forgot-password">Forgot your Password?</p>}

                    <button className="auth-btn" onClick={handleAuth}>
                        {authType === "login" ? "Login" : "Sign Up"}
                    </button>
                </div>

                {/* Right Side - Illustration */}
                <div className="auth-image">
                    <img src={logo} alt="Financial Success" />
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
