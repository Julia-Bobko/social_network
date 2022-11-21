import { authAPI } from '../api/api';
const FOLLOW = "FOLLOW";
const SET_USER_DATA = "SET_USER_DATA";

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
                ...action.data,
                isAuthorized: true
            }
        }
        default: return state
    }
}




export let setUserData = ({ id, login, email }) => { return { type: SET_USER_DATA, data: { id, login, email } } }

export const auth = () => {
    return (dispatch) => {
        authAPI.auth().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));
            }
        })
    }
}


export default auth_reducer;