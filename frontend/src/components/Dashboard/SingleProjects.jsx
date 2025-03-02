import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import "./ProjectDetails.css";

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

const ProjectDetails = ( ) => {
    // const { id } = useParams();
    const project = {
        id: 1,
        img: 'https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Modern Office Complex",
        location: "New York, NY",
        contractor: "ABC Construction",
        completion: "Dec 2025",
        budget: '3,00,000'
        
    }
    const [bidAmount, setBidAmount] = useState("");
    const [bids, setBids] = useState(project?.bids || []);

    // if (!project) {
    //     return <div className="project-details-container">Project not found</div>;
    // }

    const handleBidSubmit = () => {
        if (bidAmount) {
            const newBid = { amount: bidAmount, status: "Pending" };
            setBids([...bids, newBid]);
            setBidAmount("");
        }
    };

    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img src={project.img} alt={project.title} style={{ width: "100%", borderRadius: "10px" }} />
                <h1 style={{ marginTop: "10px", fontSize: "24px" }}>{project.title}</h1>
                <p style={{ color: "#555", fontSize: "16px" }}>{project.description}</p>
            </div>

            <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
                <p><strong>Budget:</strong> ${project.budget}</p>
                <p><strong>Deadline:</strong> {project.completion}</p>
                <p><strong>Builder:</strong> {project.contractor}</p>
            </div>

            <div>
                <h2>Bids</h2>
                {bids.length > 0 ? (
                    bids.map((bid, index) => (
                        <div key={index} style={{ background: "#e8f0fe", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
                            <p><strong>Amount:</strong> ${bid.amount}</p>
                            <p><strong>Status:</strong> {bid.status}</p>
                        </div>
                    ))
                ) : (
                    <p style={{ color: "#888" }}>No bids yet</p>
                )}

                <div style={{ marginTop: "20px", padding: "15px", background: "#f1f1f1", borderRadius: "10px" }}>
                    <h3>Place a Bid</h3>
                    <input 
                        type="number" 
                        value={bidAmount} 
                        onChange={(e) => setBidAmount(e.target.value)} 
                        placeholder="Enter bid amount" 
                        style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                    <button onClick={handleBidSubmit} style={{ width: "100%", padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Submit Bid</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
