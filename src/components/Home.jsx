import React from "react";

const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    width: "40%", // Adjusted width for better visibility
    height: "60%", // Adjusted height for better visibility
    overflow: "hidden",
    padding: "20px", // Increased padding for better spacing
    position: "absolute",
    top: "20%", // Adjusted positioning
    left: "10%",
    backgroundColor: "rgba(128, 128, 128, 0.7)", // Slightly transparent background
    alignItems: "center",
    textAlign: "center", // Center align text
  };

  const h1Style = {
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: "24px", // Adjusted font size for h1
    margin: "10px 0", // Added margin for better spacing
  };

  const pStyle = {
    fontFamily: "Arial, sans-serif", // Changed to a more standard font
    fontSize: "18px", // Adjusted font size for paragraph
    lineHeight: "1.5",
    margin: "10px 0", // Added margin for better spacing
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>
        "Education empowers lives
        <br />
        Your support transforms futures"
      </h1>
      <p style={pStyle}>
        In India, millions of orphaned and underprivileged children lack access to education.
        <br />
        A small donation of ₹100 can make a significant impact on their lives.
      </p>
    </div>
  );
};

export default Home;
