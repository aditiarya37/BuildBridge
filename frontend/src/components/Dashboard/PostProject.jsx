import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostProject.css";

const PostProject = () => {
    const [formData, setFormData] = useState({
        title: "",
        budget: "",
        requirements: "",
        location: "",
        duration: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Project Data:", formData);
        // You can add logic to send the data to the backend
    };

    return (
        <div className="post-project-container">
            <form className="post-project-form" onSubmit={handleSubmit}>
                <h2>Post a New Project</h2>

                {/* Project Title */}
                <label>Project Title</label>
                <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    placeholder="Enter project title" 
                    required 
                />

                {/* Budget */}
                <label>Budget</label>
                <input 
                    type="number" 
                    name="budget" 
                    value={formData.budget} 
                    onChange={handleChange} 
                    placeholder="Enter your budget" 
                    required 
                />

                {/* Project Requirements */}
                <label>Project Requirements</label>
                <textarea 
                    name="requirements" 
                    value={formData.requirements} 
                    onChange={handleChange} 
                    placeholder="Describe your project requirements" 
                    required 
                ></textarea>

                {/* Location */}
                <label>Location</label>
                <input 
                    type="text" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="Enter project location" 
                />

                {/* Project Duration */}
                <label>Project Duration</label>
                <input 
                    type="text" 
                    name="duration" 
                    value={formData.duration} 
                    onChange={handleChange} 
                    placeholder="Enter project duration (in months)" 
                    required 
                />

                {/* Buttons */}
                <div className="button-group">
                    <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
                    <button type="submit" className="post-btn">Post Project</button>
                </div>
            </form>
        </div>
    );
};

export default PostProject;
