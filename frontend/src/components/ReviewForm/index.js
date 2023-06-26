import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, fetchReview, createReview, updateReview } from '../../store/review';
import { Redirect } from 'react-router-dom';
import './ReviewForm.css'



export default function ReviewForm() {
    const { productId, reviewId } = useParams();
    const formType = reviewId ? 'Update Review' : 'Write A Review';
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.user);

    const [isSubmitted, setIsSubmitted] = useState(false);

    let review = useSelector(getReview(reviewId)); 

    if (formType === 'Write A Review') {
        review = {
            userId: currentUser.id,
            productId: productId,
            title: '',
            rating: 3,
            comment: '',
        };
    };

    useEffect(() => {
        if (formType === "Update Review") { 
            dispatch(fetchReview(reviewId))
        };
    },[reviewId])



    const [title, setTitle] = useState(review ? review.title : ''); 
    const [rating, setRating] = useState(review ? review.rating : 1); 
    const [comment, setComment] = useState(review ? review.comment : '');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            ...review,
            userId: currentUser.id,
            productId: productId,
            title: title,
            rating: rating,
            comment: comment
        };

        if(formType === 'Write A Review'){
            dispatch(createReview(productId, newReview));
        } else {
            dispatch(updateReview(productId, newReview))
        }

        setIsSubmitted(true);
    };

    return (
        <>
        {isSubmitted ? (
      <Redirect to={`/products/${productId}/`}/>
        ) : (
            <form onSubmit={handleSubmit} className="review-form">
                <h1 className='review-form-name'>{formType}</h1>
                <label className='review-form-title'> Title:
                    <input className='title-box'
                    type="text"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                    />
                </label>
                <label className='review-form-rating'> Rating /5:
                    <input className='rating-box'
                    type="text"
                    value={rating}
                    onChange={(e) => {setRating(e.target.value)}}
                    />
                </label>
                <label className='review-form-comment'> Comment:
                    <input  className='comment-box'
                    type="textarea"
                    value={comment}
                    onChange={(e) => {setComment(e.target.value)}}
                    />
                </label>
                <div className='review-button-container'>
                    <button className='review-form-button'>Submit</button>
                </div>

            </form>
        )}
        </>
    )
};