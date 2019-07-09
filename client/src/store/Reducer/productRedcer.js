import * as actionTypes from '../Action/actionTypes';

const initialState = {
    cat: null,
    sub: null,
    category: []
}
export const product = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CAT_SUB:
            return {
                ...state,
                cat: action.payload.cat,
                sub: action.payload.sub
            }
        case actionTypes.SET_CAT:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }


}