import ReviewShow from "../ReviewShow"
import React from "react";
import ReviewForm from "../ReviewForm";
import { useSelector } from "react-redux";
import { useState } from "react";


const ReviewIndex = ({ product, reviews, review }) => {
    
const currentUser = useSelector(state => state.session.user);

const [formType, setFormType] = useState('Write A Review');

const [currReviewId, setCurrReviewId] = useState(null);

  return (
    <div className="review-container">
      {Object.values(reviews).map((review) => (
        <ReviewShow key={review.id} review={review} currentUser={currentUser} product={product} formStateChanger={setFormType} formCurrReviewId={setCurrReviewId}/>
      ))}
      {currentUser ? <ReviewForm formType={formType} reviewId={currReviewId} /> : (<div className="review-form-message"> Please Sign In To Leave A Review </div>)}
    </div>
  );
};

export default ReviewIndex;
