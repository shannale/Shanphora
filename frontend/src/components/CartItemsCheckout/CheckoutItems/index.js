import React from "react";
import { useState } from "react";
import CheckoutModal from "../CheckoutModal";
import { deleteCartItems } from "../../../store/cart";
import { useDispatch } from "react-redux";

const CheckoutItems = ({ cartItems }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

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
        setShowModal(true);
        dispatch(deleteCartItems()); 
    };

    const handleCheckoutClose = () => {
        setShowModal(false);
    };

    return (
        <>
        <div className="subtotal-checkout">
            Merchandise Subtotal: <span className="subtotal">${calculateSubtotal().toFixed(2)}</span> 
        </div>
        <div className="shipping-checkout">
            Shipping and Handling: {cartItems.length > 0 ? <span className="shipping">{calculateSubtotal() >= 100 ? "FREE" : "$10.00"} </span> : null }
        </div>
        <hr className="checkout-break"></hr>
        <div className="estimated-total">
            Estimated Total: {cartItems.length > 0 ? <span className="total">${calculateEstimatedTotal().toFixed(2)} </span> : null}
        </div>
        <button className="checkout-button" onClick={handleCheckout} >Checkout Items</button>
        {showModal && (
        <CheckoutModal closeModal={() => setShowModal(false)} handleCheckoutClose={handleCheckoutClose} />
        )}
        </>
    );
};

export default CheckoutItems;