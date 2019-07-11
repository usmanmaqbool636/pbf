import * as actionTypes from './actionTypes';

export const inserInCart = (cart) => {
    return {
        type: actionTypes.INSERT_IN_cart,
        payload: cart
    }
}

export const deleteFromCart = (id) => {
    return {
        type: actionTypes.Delete_From_CART,
        payload: id
    }
}