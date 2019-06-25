import { combineReducers } from 'redux';
import { responsiveReducer } from './responsiveReducer';
import { user } from './user';
export default combineReducers({
    responsive: responsiveReducer,
    user
});