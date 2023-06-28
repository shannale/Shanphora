import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
    return (
        <>
            <div>
                <div className="product-container">
                    <div>
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                        <img src={product.photoUrl} className="product-image-index"/>
        </Link>
                            <div className="info-container">
                                <div className="product-index-brand">
                                    {product.brand}
                                </div>
                                <div className="product-index-name">
                                    {product.name}
                                </div>
                                <div className="product-index-price">
                                    ${product.price}.00
                                </div>
                            </div>
                    </div>
                </div>

                </div>
            </>
    );
};

export default ProductIndexItem;