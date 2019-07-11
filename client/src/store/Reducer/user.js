import * as actionTypes from '../Action/actionTypes';

const initialState = {
    // user: {}
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return action.payload

        case actionTypes.LOGOUT:
            localStorage.removeItem('token');
            return {
                // user: {}
            }
        default:
            return state;
    }


} 