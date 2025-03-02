import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Features from "./components/LandingPage/Features";
import AIFeature from "./components/LandingPage/AIFeature";
import About from "./components/LandingPage/About";
import TempLogin from "./components/LandingPage/TempLogin";
import AuthModal from "./components/Login/AuthModal"; 
import UserDashboard from "./components/Dashboard/User-Dashboard";
import PostProject from "./components/Dashboard/PostProject";
import ConstructorDashboard from "./components/Dashboard/Constructor-Dashboard";
import BrowseProjects from "./components/Dashboard/BrowseProjects";
import ProjectDetails from "./components/Dashboard/SingleProjects";
import { useEffect, useState } from "react";

export const AppRoutes = () => {
  const [data, setData] = useState({})
  const mockData = {
    users: [
        { name: "Alice", email: "alice@example.com", age: 28 },
        { name: "Bob", email: "bob@example.com", age: 35 }
    ],
    builders: [
        { name: "John Doe", experience: 10, skills: ["Carpentry", "Plumbing"] },
        { name: "Jane Smith", experience: 8, skills: ["Electrical", "Painting"] }
    ],
    bids: [
        { builderId: "123", projectId: "456", amount: 5000, status: "Pending" },
        { builderId: "789", projectId: "101", amount: 7500, status: "Accepted" }
    ],
    portfolios: [
        { builderId: "123", projects: ["456", "789"], achievements: "Award-winning designs" },
        { builderId: "101", projects: ["112", "113"], achievements: "Best builder of the year" }
    ],
    projects: [
        { id: "456", title: "House Renovation", description: "Complete overhaul", budget: 20000, deadline: "2025-06-01", builderId: "123", bids: [] },
        { id: "101", title: "Office Construction", description: "New commercial building", budget: 50000, deadline: "2025-12-15", builderId: "789", bids: [] }
    ],
    reviews: [
        { builderId: "123", reviewer: "Mike", rating: 5, comment: "Excellent work!" },
        { builderId: "789", reviewer: "Sara", rating: 4, comment: "Great but some delays." }
    ]
};

  useEffect(()=>{
    setData(mockData)
  },[])
  
  return (
    <Routes>
      <Route path="/" element={<><LandingPage /><Features /><AIFeature /><About /><TempLogin /></>} />
      <Route path="/login" element={<AuthModal />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/post-project" element={<PostProject />} />
      <Route path="/constructor-dashboard" element={<ConstructorDashboard />} />
      <Route path="/browse-project" element={<BrowseProjects data={data}/>} />
      <Route path="/project/:id" element={<ProjectDetails data={data}/>} />
    </Routes>
  );
};
