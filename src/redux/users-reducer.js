const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_PAGE = "SETPAGE";
const SET_COUNT = "SETCOUNT";

let initialState = {
    users: [
    ],
    totalCount: 20,
    pageSize: 5,
    currentPage: 1
}


let users_reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id)
                        return { ...u, follow: false }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return { ...u, follow: true }
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
        default: return state
    }
}

export let followAC = (idUser) => { return { type: FOLLOW, id: idUser } }

export let unFollowAC = (idUser) => { return { type: UNFOLLOW, id: idUser } }

export let setUserAC = (users) => { return { type: SET_USERS, users } }

export let setPageAc = (page) => { return { type: SET_PAGE, page } }

export let setCountAc = (count) => { return { type: SET_COUNT, count } }

export default users_reducer;