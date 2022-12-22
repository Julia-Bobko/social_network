import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const FOLLOW = "FOLLOW";
const SET_USER_DATA = "SET_USER_DATA";
const AUTHORIZE = "AUTHORIZE";
const SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
    captchaUrl: null
}

let auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default: return state
    }
}

export let setUserData = ({ id, login, email, isAuthorized }) => { return { type: SET_USER_DATA, data: { id, login, email, isAuthorized } } }

export let setCaptcha = (captchaUrl) => { return { type: SET_CAPTCHA, captchaUrl } }

export const auth = () => async (dispatch) => {
    let data = await authAPI.auth();
    if (data.resultCode === 0) {
        let object = {
            id: data.data.id,
            login: data.data.login,
            email: data.data.email,
            isAuthorized: true
        }
        dispatch(setUserData(object));
    }
}

export const getCaptcha = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptcha(data.url));

}



export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            dispatch(auth());
        }
        else {
            if (data.resultCode === 10) {
                dispatch(getCaptcha());
            }
            let message = (data.messages.length > 0) ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            let object = {
                id: null,
                login: null,
                email: null,
                isAuthorized: false
            }
            dispatch(setUserData(object));
        }
    }
}

export default auth_reducer;