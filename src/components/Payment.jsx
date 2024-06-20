import React, { useEffect } from "react";

const Payment = () => {
  const paymentStyle = {
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    alignItems: "center",
    justifyContent: "center"
  };

  const paymentWrapperStyle = {
    backgroundColor: "rgba(154, 46, 46, 0.422)",
    padding: "20px 60px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_OOhXZhTJhqUNYx"; 
      
      script.onerror = () => {
        console.error("Razorpay script failed to load.");
      };

      rzpPaymentForm.appendChild(script);
    }
  }, []); 

  return (
    <div style={paymentStyle}>
      <div style={paymentWrapperStyle}>
        <h1>Thank You For the Support🤞</h1>
        <form id="rzp_payment"></form>
      </div>
    </div>
  );
};

export default Payment;
