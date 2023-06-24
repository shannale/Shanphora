import './ReviewShow.css'
import React from 'react';

const ReviewShow = ({ review }) => {
  const renderStars = () => {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    return <span className="review-stars">{stars}</span>;
  };

  return (
    <div className="review-container">
      <div className="review-title">{review.title}</div>
      <div className="review-rating">
            {renderStars()}
      </div>
      <div className="review-comment">{review.comment}</div>
    </div>
  );
};

export default ReviewShow;


