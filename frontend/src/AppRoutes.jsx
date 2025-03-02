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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><LandingPage /><Features /><AIFeature /><About /><TempLogin /></>} />
      <Route path="/login" element={<AuthModal />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/post-project" element={<PostProject />} />
      <Route path="/constructor-dashboard" element={<ConstructorDashboard />} />
      <Route path="/browse-project" element={<BrowseProjects />} />
    </Routes>
  );
};
