import { combineReducers } from 'redux';
import { responsiveReducer } from './responsiveReducer';
import { user } from './user';
import { product } from './productRedcer';
import { cartReducer } from './cartReducer';
export default combineReducers({
    responsive: responsiveReducer,
    user,
    product,
    cart: cartReducer
});