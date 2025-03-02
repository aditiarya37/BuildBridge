import React, { useState } from "react";
import "./BrowseProjects.css";

const projects = [
    {
        id: 1,
        name: "Modern Office Complex",
        location: "New York, NY",
        contractor: "ABC Construction",
        completion: "Dec 2025",
    },
    {
        id: 2,
        name: "Residential Tower",
        location: "Los Angeles, CA",
        contractor: "XYZ Builders",
        completion: "Oct 2025",
    },
    {
        id: 3,
        name: "Shopping Mall",
        location: "Chicago, IL",
        contractor: "Modern Constructions",
        completion: "Mar 2025",
    },
];

const BrowseProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    return (
        <div className="browse-project-container">
            {/* Filters Section */}
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

            {/* Projects List */}
            <div className="project-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">Project Image</div>
                        <div className="project-details">
                            <h3>{project.name}</h3>
                            <p>📍 {project.location}</p>
                            <p>🏗 {project.contractor}</p>
                            <p>📅 Completion: {project.completion}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                    {"<"}
                </button>
                {[1, 2, 3].map((page) => (
                    <button
                        key={page}
                        className={currentPage === page ? "active" : ""}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default BrowseProjects;
