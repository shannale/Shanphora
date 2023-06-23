import RECEIVE_PRODUCT from './product.js'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";


export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});


const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews };
        case RECEIVE_PRODUCT:
            return {...action.reviews};
        default:
            return state;
    }
};

export default reviewsReducer;