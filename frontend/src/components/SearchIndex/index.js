import { useSelector} from "react-redux";
import ProductIndexItem from "../ProductIndexItem/index.js";
import React from "react";

export const SearchIndex = () => {
    const products = useSelector((state) => Object.values(state.products));

    return (
        <>
        <div className="product-index">
        <div className="index-title"> Search Results</div>
                {products.length !== 0 ? products.map((product) => (
                    <ProductIndexItem key={product.id} product={product} />
                )) : <div className="no-results"> No Results Found </div>}
        </div>
        </>
    );
};
