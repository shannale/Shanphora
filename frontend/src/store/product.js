import { receiveReviews } from "./review"

// action types 
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

// action controller ...data that gets sent back
const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}
const receiveProduct = (payload) => {
    return {
        type: RECEIVE_PRODUCT,
        product: payload.product,
        reviews: payload.reviews
    }
}

// thunk action ...fetches data from backend
export const fetchAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products');
    const data = await response.json();

    dispatch(receiveProducts(data));
};

export const fetchProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`)
    if (response.ok) {
        const payload = await response.json()
        dispatch(receiveProduct(payload));
        dispatch(receiveReviews(payload.reviews));
    }
};

// reducer ...controls which data gets sent 
const productReducer = (state, action) => {
    Object.freeze(state);
    const nextState = {...state}
    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return {...nextState, ...action.products};
        case RECEIVE_PRODUCT:
            return {...nextState, [action.product.id]: {...action.product, ['reviews']: {...action.reviews}}};
        default:
            return nextState;
    };
}

export default productReducer;
