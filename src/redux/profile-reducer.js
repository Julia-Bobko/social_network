import {profileAPI} from '../api/api';
const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        { message: "hi", id: 1 },
        { message: "hello", id: 2 },
        { message: "yo", id: 2 }
    ],
    newPostText: "Hello",
    userProfile: null,
    status: ""
}

let profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { message: action.newPost, id: 3 }]
            }
        case CHANGE_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state, userProfile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default: return state;
    }
}

export let addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })

export let changeTextActionCreator = (text) => ({ type: CHANGE_TEXT, text: text })

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export let setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId)=>{
    return (dispatch)=>{

    profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
        // dispatch(setTotalCount(response.data.totalCount));
      })
    }
}

export const UpdateStatus = (status)=>{
    return (dispatch)=>{
    profileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
      })
    }
}

export const SetProfileStatus = (idUser)=>{
    return (dispatch)=>{
    profileAPI.getProfileStatus(idUser).then((data) => {
            dispatch(setStatus(data));
      })
    }
}

export default profile_reducer;