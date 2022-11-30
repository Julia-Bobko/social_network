import { authAPI } from '../api/api';
const FOLLOW = "FOLLOW";
const SET_USER_DATA = "SET_USER_DATA";
const AUTHORIZE = "AUTHORIZE";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false
}

let auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default: return state
    }
}

export let setUserData = ({ id, login, email, isAuthorized }) => { return { type: SET_USER_DATA, data: { id, login, email, isAuthorized } } }

export const auth = () => {
    return (dispatch) => {
        authAPI.auth().then((data) => {
            if (data.resultCode === 0) {
                let object = {
                    id:data.data.id, 
                    login: data.data.login,
                    email: data.data.email,
                    isAuthorized: true
                }
                dispatch(setUserData(object));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                dispatch(auth());
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then((data) => {
            if (data.resultCode === 0) {
                let object = {
                    id: null, 
                    login: null,
                    email: null,
                    isAuthorized: false
                }
                dispatch(setUserData(object));
            }
        })
    }
}


export default auth_reducer;