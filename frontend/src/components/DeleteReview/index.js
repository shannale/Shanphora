import React from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/review";

const DeleteReview = ({ review }) => {
	const dispatch = useDispatch();
  
	const handleDelete = () => {
	  dispatch(deleteReview(review.id));
	};
  
	return (
	  <button onClick={handleDelete} className="delete-button">
		Delete Review
	  </button>
	);
  };
  
  export default DeleteReview;