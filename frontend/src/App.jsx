import React from "react";
import '@fontsource/inter';
import NavBar from "./components/NavBar/NavBar";
import { AppRoutes } from "./AppRoutes"; 

function App() {
  return (
    <>
      <NavBar /> {/* Always visible */}
      <AppRoutes /> {/* Handles routing */}
    </>
  );
}

export default App;
