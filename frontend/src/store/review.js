import csrfFetch from "./csrf";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"; 
export const REMOVE_REVIEW = "REMOVE_REVIEW"

const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = (reviews) => ({
    type: RECEIVE_REVIEW,
    reviews
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const getReview = (reviewId) => (state) => (
    state.reviews ? state.reviews[reviewId]: null 
); 

export const getReviews = (state) => (
    state.reviews ? Object.values(state.reviews) : []
);


export const fetchReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews');

    if (response.ok) {
        const reviews = await response.json();
        dispatch(receiveReviews(reviews));
    };
}; 

export const fetchReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`);

    if (response.ok) {
        const review = await response.json(); 
        dispatch(receiveReview(review));
    };
};

export const createReview = (productId, review) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}/reviews`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });

    if (response.ok) {
        const newReview = await response.json();
        dispatch(receiveReview(newReview));
    };

}; 

export const updateReview = (product, review) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${product.id}/reviews/${review.id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review)
    }); 
    
    if (response.ok) {
        const newReview = await response.json();
        dispatch(receiveReview(newReview));
    };

}; 

export const deleteReview = (product, reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${product.id}/reviews/${reviewId}`, {
        method: 'DELETE'
    }); 

    if (response.ok) {
        dispatch(removeReview(reviewId));
    };

};


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state}

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews };
        case RECEIVE_REVIEW:
            nextState[action.reviews.id] = action.reviews
            return { ...nextState};
        case RECEIVE_PRODUCT:
            return {...action.reviews};
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState;
        default:
            return state;
    }
};

export default reviewsReducer;