import React from "react";
import Sidebar from "./Sidebar";
import Right from "./Right";
import LoginPage from "./LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Home Page Route */}
        <Route
          path="/home"
          element={
            <div className="home-container flex items-center w-full">
              <div className="sub-home-container flex w-full max-md:flex-col">
                <Sidebar />
                <Right />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default HomePage;
