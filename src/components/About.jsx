import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const aboutStyle = {
    padding: "20px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    minHeight: "calc(100vh - 64px - 20px)", // Adjusted to maintain distance from Navbar and screen bottom
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
    '@media (max-width: 600px)': {
      fontSize: "20px"
    }
  };

  const paragraphStyle = {
    fontSize: "18px",
    lineHeight: "1.5",
    '@media (max-width: 600px)': {
      fontSize: "16px"
    }
  };

  const responsiveStyle = {
    '@media (max-width: 600px)': {
      padding: "10px"
    }
  };

  const boxStyle = {
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    padding: "50px", // Reduced padding to decrease the size of the box
    borderRadius: "10px",
    maxWidth: "600px", // Limiting the maximum width of the box
    width: "100%",
    boxSizing: "border-box",
    '@media (max-width: 600px)': {
      padding: "20px"
    }
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '8px 16px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#2255aa',
    color: '#fff',
    transform: 'scale(1.1)',
    transition: 'transform 0.3s, background-color 0.3s',
  };

  return (
    <div style={{ ...aboutStyle, ...responsiveStyle }}>
      <div style={boxStyle}>
        <h1 style={headingStyle}>What does Helping Hands🤝 Do?</h1>
        <p style={paragraphStyle}>
          We are dedicated to providing education to poor children in need. By contributing just ₹100, 
          you can help us make a difference in the lives of many children who lack access to education. 
          Together, we can create a brighter future for them.
        </p>
        <Link to="/pay">
          <button style={buttonStyle}>
            Support Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
