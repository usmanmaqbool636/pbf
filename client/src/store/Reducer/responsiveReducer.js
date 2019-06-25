import * as actionTypes from '../Action/actionTypes';

const initialState = {
    sidebar: false
}
export const responsiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOOGLE_SIDEBAR:
            return {
                sidebar: !state.sidebar
            }
        default:
            return state;
    }


} 