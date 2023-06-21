import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`}>
            <>
            <div>
                    <p>
                        <img src={product.photoUrl} className="product-image-index"/>
                        <div>
                            {product.name}
                        </div>
                        <div>
                            {product.brand}
                        </div>
                    </p>
            </div>
            </>
        </Link>
    );
};

export default ProductIndexItem;