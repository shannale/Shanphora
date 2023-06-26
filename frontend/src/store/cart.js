export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItems = (cartItems) => (
    ({
      type: RECEIVE_CART_ITEMS,
      cartItems
    })
);

const removeCartItem = (cartItemId) => (
    ({
      type: REMOVE_CART_ITEM,
      cartItemId
    })
);

export const fetchCartItems = () => async (dispatch) => {
    const response = await fetch('/api/cartItems');

    if (response.ok) {
        const cartItems = await response.json();
        dispatch(receiveCartItems(cartItems));
    };
}; 
  
  
export const createCartItem = (userId, cartItem) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/cartItem`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
    });

    if (response.ok) {
        const newCartItem = await response.json();
        dispatch(receiveCartItem(newCartItem));
    };
}; 

export const updateCartItem = (user, cartItem) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${user.id}/cartItems/${cartItem.id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review)
    }); 
    
    if (response.ok) {
        const newCartItem = await response.json();
        dispatch(receiveCartItem(newCartItem));
    };
}; 

  
export const deleteCartItem = (user, cartItemId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${user.id}/cartItems/${cartItemId}`, {
        method: 'DELETE'
    }); 

    if (response.ok) {
        dispatch(removeCartItem(cartItemId));
    };

};


const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state}

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return { ...action.cartItems };
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId]
            return nextState;
        default:
            return state;
    }
};

export default cartItemsReducer;