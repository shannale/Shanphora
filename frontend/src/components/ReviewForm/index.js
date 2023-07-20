import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, createReview, updateReview } from '../../store/review';
import './ReviewForm.css';

export default function ReviewForm({ formType, reviewId }) {
    const { productId } = useParams();
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.user);

    let review = useSelector(getReview(reviewId));

    if (formType === 'Write A Review') {
        review = {
        userId: currentUser.id,
        productId: productId,
        title: '',
        rating: 5,
        comment: '',
        };
    }

    const [title, setTitle] = useState(review ? review.title : '');
    const [rating, setRating] = useState(review ? review.rating : 1);
    const [comment, setComment] = useState(review ? review.comment : '');
    const [errors, setErrors] = useState({}); 
    const [updateSuccess, setUpdateSuccess] = useState(false);

    useEffect(() => {
        if (review && formType === 'Update Review') {
          setTitle(review.title);
          setRating(review.rating);
          setComment(review.comment);
        }
    }, [review, formType]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {}; 

        if (rating < 1 || rating > 5) {
            newErrors.rating = 'Rating must be a value between 1 and 5';
        }

        if (!title) {
            newErrors.title = 'Title is required';
        }

        if (!comment) {
            newErrors.comment = 'Comment is required';
        }

        if (Object.keys(newErrors).length === 0) {
        const newReview = {
            ...review,
            userId: currentUser.id,
            productId: productId,
            title: title,
            rating: rating,
            comment: comment,
        };

        if (formType === 'Write A Review') {
            dispatch(createReview(productId, newReview));
        } else {
            dispatch(updateReview(productId, newReview));
            setUpdateSuccess(true);
        }
        } else {
            setErrors(newErrors); 
        }
    };

    return (
            <>
            <form onSubmit={handleSubmit} className="review-form">
                <h1 className="review-form-name">{formType}</h1>
                <label className="review-form-title">
                Title:
                <input
                    className="title-box"
                    type="text"
                    value={title}
                    onChange={(e) => {
                    setTitle(e.target.value);
                    }}
                />
                    </label>
                    <label className="review-form-rating">
                    Rating /5:
                    <input
                        className="rating-box"
                        type="text"
                        value={rating}
                        onChange={(e) => {
                        setRating(e.target.value);
                        }}
                    />

                    </label>
                    <label className="review-form-comment">
                    Comment:
                    <input
                        className="comment-box"
                        type="textarea"
                        value={comment}
                        onChange={(e) => {
                        setComment(e.target.value);
                        }}
                    />
                    </label>
                    {review && (
                    <div className="review-button-container">
                        <button className="review-form-button">Submit</button>
                    </div>
                    )}

                    <div>
                        {errors.title && <div className="error">{errors.title}</div>}
                        {errors.rating && <div className="error">{errors.rating}</div>}
                        {errors.comment && <div className="error">{errors.comment}</div>}
                        {updateSuccess && <div className="update-success">Your review has been updated!</div>}
                    </div>
            </form>
            </>
    );
}

