const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
let initialState = {
    users: [
        // {
        //     id: 1, fullName: 'Rose',
        //     imgPhoto: 'https://www.ogorod.ru/images/cache/460x389/crop/images%7Ccms-image-000036753.jpg',
        //      follow: false, description: 'Merry and Fragrant', location: { country: 'Belarus', city: 'Minsk' }
        // },
        // {
        //     id: 2, fullName: 'Carnation',
        //     imgPhoto: 'https://www.ogorod.ru/images/cache/460x389/crop/images%7Ccms-image-000036753.jpg',
        //      follow: true, description: 'Merry and Fragrant', location: { country: 'Belarus', city: 'Minsk' }
        // },
        // {
        //     id: 3, fullName: 'Сhamomile',
        //     imgPhoto: 'https://www.ogorod.ru/images/cache/460x389/crop/images%7Ccms-image-000036753.jpg',
        //      follow: false, description: 'Merry and Fragrant', location: { country: 'Belarus', city: 'Minsk' }
        // }, {
        //     id: 4, fullName: 'Tulip',
        //     imgPhoto: 'https://www.ogorod.ru/images/cache/460x389/crop/images%7Ccms-image-000036753.jpg',
        //      follow: false, description: 'Merry and Fragrant', location: { country: 'Belarus', city: 'Minsk' }
        // }
    ]
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
                users: [...state.users, ...action.users]
            }
        }
        default: return state
    }
}

export let followAC = (idUser) => { return { type: FOLLOW, id: idUser } }

export let unFollowAC = (idUser) => { return { type: UNFOLLOW, id: idUser } }

export let setUserAC = (users) => { return { type: SET_USERS, users } }
export default users_reducer;