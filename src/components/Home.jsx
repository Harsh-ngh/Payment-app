import React from "react";
import download from '../images/download.jpeg';
const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    width: "40%",
    height: "60%",
    overflow: "hidden",
    padding: "20px",
    position: "absolute",
    top: "20%",
    left: "10%",
    backgroundColor: "rgba(128, 128, 128, 0.7)",
    alignItems: "center",
    textAlign: "center",
  };

  const h1Style = {
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: "24px",
    margin: "10px 0",
  };

  const pStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    lineHeight: "1.5",
    margin: "10px 0",
  };

  const imageContainerStyle = {
    width: "40%",
    display: "none",
    '@media (min-width: 768px)': {
      display: "block",
    }
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={imageContainerStyle}>
         
          <img src={download} alt="Background" style={imageStyle} />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
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
      </div>
    </div>
  );
};

export default Home;
