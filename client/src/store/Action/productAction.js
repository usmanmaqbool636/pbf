import * as actionTypes from './actionTypes';
export const setCatSub = (cat, sub) => {
    return {
        type: actionTypes.SET_CAT_SUB,
        payload: { cat, sub }
    }
}
export const setCat = (category) => {
    return {
        type: actionTypes.SET_CAT,
        payload: category
    }
}