import ReviewShow from "../ReviewShow"
import React from "react";

const ReviewIndex = ({ reviews }) => {

  return (
    <div className="review-container">
      {Object.values(reviews).map((review) => (
        <ReviewShow key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewIndex;
