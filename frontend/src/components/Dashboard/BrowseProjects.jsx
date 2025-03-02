import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BrowseProjects.css";

const projects = [
    {
        id: 1,
        img: 'https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Modern Office Complex",
        location: "New York, NY",
        contractor: "ABC Construction",
        completion: "Dec 2025",
    },
    {
        id: 2,
        img: 'https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Residential Tower",
        location: "Los Angeles, CA",
        contractor: "XYZ Builders",
        completion: "Oct 2025",
    },
    {
        id: 3,
        img: 'https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Shopping Mall",
        location: "Chicago, IL",
        contractor: "Modern Constructions",
        completion: "Mar 2025",
    },
];

const BrowseProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(projects.length / 3);
    
    return (
        <div className="browse-project-container">
            <div className="filters">
                <select className="filter-dropdown">
                    <option>All Locations</option>
                </select>
                <select className="filter-dropdown">
                    <option>All Constructors</option>
                </select>
                <select className="filter-dropdown">
                    <option>All Status</option>
                </select>
            </div>

            <div className="project-list">
                {projects.map((project) => (
                    <Link key={project.id} to={`/project/${project.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <div className="project-card">
                            <div className="project-image">
                                <img src={project.img} alt={project.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="project-details">
                                <h3>{project.name}</h3>
                                <p>📍 {project.location}</p>
                                <p>🏗 {project.contractor}</p>
                                <p>📅 Completion: {project.completion}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>{"<"}</button>
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index + 1} className={currentPage === index + 1 ? "active" : ""} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                ))}
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>{">"}</button>
            </div>
        </div>
    );
};

export default BrowseProjects;