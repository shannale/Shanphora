// action types 
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

// action controller ...data that gets sent back
const recieveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}

// thunk action ...fetches data from backend
export const fetchAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products');
    const data = await response.json();

    dispatch(recieveProducts(data));
};

// reducer ...controls which data gets sent 
const productReducer = (state, action) => {
    Object.freeze(state);
    const nextState = {...state}

    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return {...nextState, ...action.products};
        default:
            return nextState;
    };
}

export default productReducer;
