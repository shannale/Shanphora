import ReviewShow from "../ReviewShow"
import React from "react";
import ReviewForm from "../ReviewForm";

const ReviewIndex = ({ reviews }) => {

  return (
    <div className="review-container">
      {Object.values(reviews).map((review) => (
        <ReviewShow key={review.id} review={review} />
      ))}
      <ReviewForm />
    </div>
  );
};

export default ReviewIndex;
