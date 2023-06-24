

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});



const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state}
    debugger
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