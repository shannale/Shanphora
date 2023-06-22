import React from "react";
import { Link } from "react-router-dom";

const CategoryHomeIndex = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
            <>
            <div>
                <div className="product-home-container">
                    <div>
                        <img src={product.photoUrl} className="product-image-home"/>
                            <div className="home-products-container">
                                <div className="product-home-brand">
                                    {product.brand}
                                </div>
                                <div className="product-home-name">
                                    {product.name}
                                </div>
                            </div>
                    </div>
                </div>

                </div>
            </>
        </Link>
    );
};

export default CategoryHomeIndex;