
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import "./style.scss";

const Home = () => {
  return (
    <div className="container">
      <h1>
        "Food nourishes the body
        <br />
        Sharing nourishes the soul"
      </h1>
      <p>
        Food Insecurity Affects Nearly 1 Billion People,
        <br />
        Leading to 2 Million Child Deaths Annually
      </p>
      <Link to="/pay">
        <button>Let's give a helping hand 🤞</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="home">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pay" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
