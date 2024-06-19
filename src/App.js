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
        In India, millions of orphan and poor children face severe food shortages.
        <br />
        A small donation of ₹100 can make a big difference in their lives.
      </p>
      <Link to="/pay">
        <button>Pay Now</button>
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
