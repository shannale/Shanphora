import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteReview } from '../../store/review';

const DeleteReview = () => {
	const { reviewId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const currentProd = useSelector((state) => state.products.oneProduct);

	const handleDelete = async () => {
		await dispatch(deleteReview(reviewId));
		history.push(`/products/${currentProd.id}`);
	};
	return (
		<>
			<button className='delete-review-button' onClick={handleDelete}>Remove Your Review</button>
		</>
	);
};
export default DeleteReview;