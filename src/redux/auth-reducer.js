import { authAPI } from '../api/api';
const FOLLOW = "FOLLOW";
const SET_USER_DATA = "SET_USER_DATA";
const AUTHORIZE = "AUTHORIZE";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
    rememberMe: false,
    password: ""

}

let auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        }

        case AUTHORIZE: {
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        }
        default: return state
    }
}

export let setUserData = ({ id, login, email }) => { return { type: SET_USER_DATA, data: { id, login, email } } }
export let setAuthoreze = (data) => { return { type: AUTHORIZE, data } }
export const auth = () => {
    return (dispatch) => {
        authAPI.auth().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    debugger
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                console.log(login);
                dispatch(setUserData());
            }
        })
    }
}


export default auth_reducer;