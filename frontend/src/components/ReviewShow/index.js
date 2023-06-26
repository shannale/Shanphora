import './ReviewShow.css'
import React from 'react';
import { deleteReview } from '../../store/review';
import { useDispatch } from 'react-redux';

const ReviewShow = ({ product, review, currentUser}) => {
  const dispatch = useDispatch();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const updatedAt = new Date(review.updatedAt);
  const month = months[updatedAt.getMonth()];
  const formattedDate = `${month} ${updatedAt.getDate()}-${updatedAt.getFullYear()}`;

  const handleDelete = () => {
    dispatch(deleteReview(product, review.id));
  };

  const renderStars = () => {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    return <span className="review-stars">{stars}</span>;
  };

  return (
    <>
        <div className="review-container">
        <div className="review-title">{review.title}</div>
        <div className="review-rating">
                {renderStars()}
        </div>
        <div className="review-comment">{review.comment}</div>
        <div className="review-user"> {review.user} {formattedDate}</div>
        <div className='review-user-delete-button'> {currentUser && review.userId === currentUser.id && (
            <button onClick={handleDelete} className="delete-button">
              Delete Review
            </button>
          )} 
        </div>
        </div>
    </>
  );
};

export default ReviewShow;


