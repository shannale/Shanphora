import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);

  useEffect(() => {
    dispatch(fetchAllProducts(productId));
  }, [dispatch, productId]);

  if (product === undefined){
    return null;
  };

  return (
    <>
      <div className="show-title"> {product.category} </div>
          <div className="product-show">
            <img src={product.photoUrl} alt={product.name} className="product-image-show" />
            <div className="show-product">
                <div className="product-brand-show">{product.brand}</div>
                <div></div>
                <div className="product-name-show">{product.name}</div>
                <div></div>
                <div className="product-price-show">${product.price}.00</div>
                <div className="des-title-show">About the Product</div>
                <div className="product-description-show">{product.description}</div>

                <div className="product-showing">
                  <button className="product-add"> 
                    <div className="add-button-words">
                      Add to Basket 
                      <br />
                      <div className="shipping-button-words">
                        for Standard Shipping
                      </div>
                    </div>
                  </button>
                </div>
            </div>

      </div>

    </>
  );
};

export default ProductShow;





