import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHoverHome, setIsHoverHome] = useState(false);
  const [isHoverAbout, setIsHoverAbout] = useState(false);
  const [isHoverContact, setIsHoverContact] = useState(false);

  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_OOhXZhTJhqUNYx";
      rzpPaymentForm.appendChild(script);
    }
  }, []);

  const handleHomeHover = () => {
    setIsHoverHome(true);
  };

  const handleHomeLeave = () => {
    setIsHoverHome(false);
  };

  const handleAboutHover = () => {
    setIsHoverAbout(true);
  };

  const handleAboutLeave = () => {
    setIsHoverAbout(false);
  };

  const handleContactHover = () => {
    setIsHoverContact(true);
  };

  const handleContactLeave = () => {
    setIsHoverContact(false);
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#ccc", 
    marginTop: "0", 
    position: "fixed", 
    width: "100%", 
    zIndex: 1000, 
    top: 0,
    left: 0
  };

  const navbarLeftStyle = {
    display: "flex",
    alignItems: "center"
  };

  const navbarCenterStyle = {
    flexGrow: 1,
    textAlign: "center",
    fontSize: "20px",
    position: "relative",
    overflow: "hidden",
    animation: "enlargeShrink 3s infinite alternate ease-in-out"
  };

  const navbarRightStyle = {
  display: "flex",
  alignItems: "center",
    marginLeft: "auto",
  padding:"40px"
  
};

  const navLinkStyle = isHover => ({
  textDecoration: "none",
  color: "#000",
  fontSize: isHover ? "22px" : "inherit",
  transition: "font-size 0.3s ease-out",
  marginLeft: "10px", 
});


  return (
    <div style={navbarStyle}>
      <div style={navbarLeftStyle}>
        <form id="rzp_payment_form"></form>
      </div>
      <div style={navbarCenterStyle}>
        <span className="app-name">Helping Hands🤝</span>
        <style>
          {`
            @keyframes enlargeShrink {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
            }
          `}
        </style>
      </div>
      <div style={navbarRightStyle}>
        <Link
          to="/"
          className="nav-link"
          style={{ ...navLinkStyle(isHoverHome) }}
          onMouseEnter={handleHomeHover}
          onMouseLeave={handleHomeLeave}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="nav-link"
          style={{ ...navLinkStyle(isHoverAbout) }}
          onMouseEnter={handleAboutHover}
          onMouseLeave={handleAboutLeave}
        >
          About Us
        </Link>
        <a
          href="mailto:sengarharshsinghrajput@gmail.com"
          className="nav-link"
          style={{ ...navLinkStyle(isHoverContact) }}
          onMouseEnter={handleContactHover}
          onMouseLeave={handleContactLeave}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
