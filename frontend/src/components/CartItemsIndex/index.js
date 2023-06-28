import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartItems.css";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../store/cart";

const CartItemsIndex = ({ cartItem }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const handleRemoveCartItem = (cartItemId) => {
        dispatch(deleteCartItem(cartItemId));
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    return (
        <>
        <div className="cart-items-container">
                <div className="cart-item-container">
                    <Link to={`/products/${cartItem.product.id}`} style={{ textDecoration: "none" }}>
                        <img src={cartItem.photoUrl} className="cart-product-image" />
                    </Link>
                <div className="cart-item-details">
                        <div className="cart-product-brand">
                            <span>
                                {cartItem.product.brand}
                            </span>{" "}
                            <span className="cart-product-price">
                                ${parseInt(cartItem.product.price) * quantity}.00
                            </span>
                        </div>
                            <div className="cart-product-name">
                            {cartItem.product.name}
                            </div>
                        <div className="bottom-item-components">
                            <div className="cart-product-quantity">
                                <select value={quantity} onChange={handleQuantityChange} className="product-quantity-selector">
                                    {Array.from({ length: 10 }, (_, index) => index + 1).map((number) => (
                                    <option key={number} value={number}>
                                        {number}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="line-split"></div>
                            <div className="remove-product" onClick={() => handleRemoveCartItem(cartItem.id)}>
                            Remove
                            </div>
                        </div>
                </div>
                </div>
                <hr className="cart-product-separator" />
        </div>
        </>
    );
};

export default CartItemsIndex;