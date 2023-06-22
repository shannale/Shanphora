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
    <div>
      <img src={product.photoUrl} alt={product.name} className="product-image-show" />
      <div className="product-name-show">{product.name}</div>
      <div className="product-brand-show">{product.brand}</div>
      <div classNAme="product-description-show">{product.description}</div>
    </div>
  );
};

export default ProductShow;





