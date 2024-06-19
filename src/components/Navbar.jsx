// Navbar.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
        <a href="mailto:sengarharshsinghrajput@gmail.com">Contact Us</a>
      </div>
      <div>
        <form id="rzp_payment_form"></form>
      </div>
    </div>
  );
};

export default Navbar;
