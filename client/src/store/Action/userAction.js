import * as actionTypes from './actionTypes';

export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        payload: user
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}
