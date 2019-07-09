import * as actionTypes from '../Action/actionTypes';

const initialState = {
    sidebar: false,
    responsiveNave: false
}
export const responsiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOOGLE_SIDEBAR:
            return {
                ...state,
                sidebar: !state.sidebar
            }
        case actionTypes.RESPONSIVE_NAVE:
            return {
                ...state,
                responsiveNave: !state.responsiveNave
            }
        default:
            return state;
    }


} 