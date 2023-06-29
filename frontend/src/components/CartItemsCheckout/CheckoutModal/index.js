import React from "react";
import linkedin from "./Images/linkedin.png"
import github from "./Images/github.png"

const CheckoutModal = ({ handleCheckoutClose }) => {
  return (
    <div className="checkout-modal">
      <div className="checkout-modal-content">
        <div className="checkout-title">S H A P H O R A</div>
        <div className="checkout-name"> by Shanna</div>
        <div className="checkout-first-message">THANK YOU</div>
        <div className="checkout-second-message"> for your viewing my clone</div>
        <div className="end-checkout-message"> Please visit my GitHub and LinkedIn </div>
                <div className="icon-links">
                    <a href="https://github.com/shannale/Shaphora" target="blank">
                        <img className="end-github" src={github}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/shanna-le/" target="blank">
                        <img className="end-linkedin" src={linkedin}></img>
                    </a>
                </div>
        <div className="exit-modal-button">
          <button className="modal-button-confirm" onClick={handleCheckoutClose}>
            SHOP AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;