import * as actionTypes from '../Action/actionTypes';

const initialState = []
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INSERT_IN_cart:
            return action.payload

        case actionTypes.Delete_From_CART:
            const cart = state.filter(c => {
                return c._id !== action.payload;
            })
            return cart;
        default:
            return state;
    }
} 