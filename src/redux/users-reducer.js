import { userAPI } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_PAGE = "SETPAGE";
const SET_COUNT = "SETCOUNT";
const IS_FETCHING = "ISFETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";


let initialState = {
    users: [
    ],
    totalCount: 20,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followed: false,
    followingInprogress: []
}


let users_reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id)
                        return { ...u, followed: true }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_COUNT: {
            return {
                ...state,
                totalCount: action.count
            }
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInprogress: action.followingInprogress
                    ? [...state.followingInprogress, action.id]
                    : [state.followingInprogress.filter(id => id != action.id)]
            }
        }
        default: return state
    }
}

export let followSuccess = (idUser) => { return { type: FOLLOW, id: idUser } }

export let unFollowSuccess = (idUser) => { return { type: UNFOLLOW, id: idUser } }

export let setUsers = (users) => { return { type: SET_USERS, users } }

export let setCurrentPage = (page) => { return { type: SET_PAGE, page } }

export let setTotalCount = (count) => { return { type: SET_COUNT, count } }

export let setFetching = (isFetching) => { return { type: IS_FETCHING, isFetching } }

export let toggleFollowingProgress = (followingInprogress, id) => { return { type: TOGGLE_FOLLOWING_PROGRESS, followingInprogress, id } }

export const getUsersThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(setFetching(true));
        dispatch(setCurrentPage(page));
        userAPI.getUsers(page, pageSize).then((data) => {
            dispatch(setFetching(false));
            dispatch(setUsers(data.items));
            //dispatch(setTotalCount(response.data.totalCount));
        })
    }
}

export const unFollow = (idUser) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, idUser));
        userAPI.unFollow(idUser).then((data) => {

            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(idUser));
            }
            dispatch(toggleFollowingProgress(false, idUser));
        })
    }
}

export const follow = (idUser) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, idUser));
        userAPI.follow(idUser).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(idUser));
                dispatch(toggleFollowingProgress(false, idUser));
            }
        })
    }
}

export default users_reducer;