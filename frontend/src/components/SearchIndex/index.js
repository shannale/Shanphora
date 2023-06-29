import { useSelector} from "react-redux";
import ProductIndexItem from "../ProductIndexItem/index.js";
import React from "react";

export const SearchIndex = () => {
    const products = useSelector((state) => Object.values(state.products));

    return (
        <>
        <div> Search </div>
        <div className="product-index">
        {/* <div className="index-title"> Makeup </div> */}
                {products.map((product) => (
                    <ProductIndexItem key={product.id} product={product} />
                ))}
        </div>
        </>
    );
};
