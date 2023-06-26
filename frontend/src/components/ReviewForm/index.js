import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, fetchReview, createReview, updateReview } from '../store/reviews';


export default function ReviewForm() {
    const { reviewId } = useParams();
    const formType = reviewId ? 'Update Review' : 'Create Review';
    const dispatch = useDispatch();

    let review = useSelector(getReview(reviewId)); 

    if (formType === 'Create Review') {
        review = {
            title: '',
            rating: null,
            comment: '',
        };
    };

    useEffect(() => {
        if (formType === "Update Post") { 
            dispatch(fetchReview(reviewId))
        };
    },[reviewId])



    const [title, setTitle] = useState(review.title); 
    const [rating, setRating] = useState(review.rating); 
    const [comment, setComment] = useState(review.comment);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            ...review,
            title: title,
            rating: rating,
            comment:comment
        };

        if(formType === 'Create Review'){
            dispatch(createReview(newReview));
        } else {
            dispatch(updateReview(newReview))
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{formType}</h1>
            <label> Title
                <input 
                type="text"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                />
            </label>
            <label> Rating
                <input 
                type="text"
                value={rating}
                onChange={(e) => {setRating(e.target.value)}}
                />
            </label>
            <label> Comment
                <input 
                type="textarea"
                value={comment}
                onChange={(e) => {setCommment(e.target.value)}}
                />
            </label>

            <button>{formType}</button>

        </form>
    )
};