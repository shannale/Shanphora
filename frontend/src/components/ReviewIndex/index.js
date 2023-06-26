import ReviewShow from "../ReviewShow"
import React from "react";
import ReviewForm from "../ReviewForm";
import { useSelector } from "react-redux";


const ReviewIndex = ({ product, reviews }) => {
    
const currentUser = useSelector(state => state.session.user);

  return (
    <div className="review-container">
      {Object.values(reviews).map((review) => (
        <ReviewShow key={review.id} review={review} currentUser={currentUser} product={product}/>
      ))}
      {currentUser ? <ReviewForm /> : (<div className="review-form-message"> Please Sign In To Leave A Review </div>)}
    </div>
  );
};

export default ReviewIndex;
