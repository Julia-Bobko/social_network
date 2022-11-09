const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_PAGE = "SETPAGE";
const SET_COUNT = "SETCOUNT";
const IS_FETCHING = "ISFETCHING";

let initialState = {
    users: [
    ],
    totalCount: 20,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followed : false
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
        default: return state
    }
}

export let follow = (idUser) => { return { type: FOLLOW, id: idUser } }

export let unFollow = (idUser) => { return { type: UNFOLLOW, id: idUser } }

export let setUsers = (users) => { return { type: SET_USERS, users } }

export let setCurrentPage = (page) => { return { type: SET_PAGE, page } }

export let setTotalCount = (count) => { return { type: SET_COUNT, count } }

export let setFetching = (isFetching) => { return { type: IS_FETCHING, isFetching } }

export default users_reducer;