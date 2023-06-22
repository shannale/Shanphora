import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
            <>
            <div>
                <div className="product-container">
                    <div>
                        <img src={product.photoUrl} className="product-image-index"/>
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
        </Link>
    );
};

export default ProductIndexItem;