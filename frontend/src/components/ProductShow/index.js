import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../store/product";
import ReviewIndex from "../ReviewIndex";
import { createCartItem, updateCartItem} from "../../store/cart";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const history = useHistory();
  const product = useSelector((state) => state.products[productId]);
  const reviews = useSelector((state) => Object.values(state.reviews)
    || []);

  const cartItems = useSelector((state) => state.cartItems)

  const currentUser = useSelector(state => state.session.user);
  

  
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);
  
  
  const handleAddToCart = () => {
    
    if (productId in cartItems) {
      const cartItem = {userId: currentUser.id, productId: productId, quantity: cartItems[productId].quantity + 1, id: cartItems[productId].id}
      dispatch(updateCartItem(cartItem));
      history.push('/cartItems');
    } else {
      const cartItem = {userId: currentUser.id, productId: productId, quantity: 1 }
      dispatch(createCartItem(cartItem));
      history.push('/cartItems');
    };
  };
  
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
                  {currentUser ?
                  <button className="product-add" onClick={handleAddToCart}> 
                    <div className="add-button-words">
                      Add to Basket 
                      <br />
                      <div className="shipping-button-words">
                        for Standard Shipping
                      </div>
                    </div>
                  </button> : <div className="product-show-no-user">Please Sign In To Shop</div>
                  }
                </div>
            </div>

      </div>

      <div className="reviews-title">
        Ratings & Reviews
      </div>
      <div className="reviews-index">
        {reviews ? <ReviewIndex reviews={reviews} product={product} /> : null} 
      </div>
    </>
  );
};

export default ProductShow;

