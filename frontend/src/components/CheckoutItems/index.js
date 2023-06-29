import React from "react";
import { useState } from "react";
import CheckoutModal from "../CheckoutModal";

const CheckoutItems = ({ cartItems }) => {
    const [showModal, setShowModal] = useState(false);

    const calculateSubtotal = () => {
        let subtotal = 0;
        cartItems.forEach((item) => {
        subtotal += item.product.price * item.quantity;
        });
        return subtotal;
    };

    const calculateEstimatedTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal >= 100 ? subtotal : subtotal + 10;
    };

    const handleCheckout = () => {
        setShowModal(false);
    };

    return (
        <>
        <div className="subtotal-checkout">
            Merchandise Subtotal: <span className="subtotal">${calculateSubtotal().toFixed(2)}</span> 
        </div>
        <div className="shipping-checkout">
            Shipping and Handling: <span className="shipping">{calculateSubtotal() >= 100 ? "FREE" : "$10.00"} </span>
        </div>
        <hr className="checkout-break"></hr>
        <div className="estimated-total">
            Estimated Total: <span className="total">${calculateEstimatedTotal().toFixed(2)} </span>
        </div>
        <button className="checkout-button" onClick={() => setShowModal(true)}>Checkout Items</button>
        {showModal && (
        <CheckoutModal closeModal={() => setShowModal(false)} handleCheckout={handleCheckout} />
        )}
        </>
    );
};

export default CheckoutItems;