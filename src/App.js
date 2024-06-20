import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import About from "./components/About";
import Home from "./components/Home"; // Import the modified Home component

const App = () => {
  const appStyle = {
    height: "100vh",
    width: "100vw",
    position: "relative",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Align content at the top
    minHeight: "100vh", // Ensure content takes full viewport height
    backgroundImage: 'url("./images/background.jpg")',
    backgroundSize: "cover",
    padding: "20px", // Add padding for content
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <div style={contentStyle}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pay" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
