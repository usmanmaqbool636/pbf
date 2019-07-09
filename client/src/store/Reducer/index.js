import { combineReducers } from 'redux';
import { responsiveReducer } from './responsiveReducer';
import { user } from './user';
import { product } from './productRedcer';
export default combineReducers({
    responsive: responsiveReducer,
    user,
    product
});