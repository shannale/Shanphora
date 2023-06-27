import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./CartItems.css"

const CartItemsIndex = ({cartItem}) => {
    return (
        <>
        <Link to={`/products/${cartItem.product.id}`} style={{ textDecoration: 'none' }}>
            <div className="cart-items-container">
                <div className="cart-item-container">
                    <img src={cartItem.photoUrl} className="cart-product-image"/>
                        <div className="cart-item-details">
                            <div className="cart-product-brand">
                                <span>{cartItem.product.brand}</span> <span className="cart-product-price"> ${cartItem.product.price}.00 </span> 
                            </div>
                            <div className="cart-product-name">
                                {cartItem.product.name}
                            </div>
                            {/* <div className="cart-product-price">
                                ${cartItem.product.price}.00
                            </div> */}
                            <div className="cart-product-quantity">
                                {cartItem.quantity}
                            </div>
                        </div>
                </div>
                <hr className="cart-product-separator"></hr>
            </div>
        </Link>
        </>
    );
};
export default CartItemsIndex;