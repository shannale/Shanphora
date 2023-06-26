import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReview } from '../../store/review';
import ReviewForm from '../ReviewForm';

const UpdateReview = () => {
  const { productId, reviewId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReview(reviewId));
  }, [dispatch, reviewId]);

  const review = useSelector(state => state.review.currentReview);

  return (
    <div>
      {review ? (
        <ReviewForm initialReview={review} />
      ) : (
        <div>Loading review...</div>
      )}
    </div>
  );
};

export default UpdateReview;