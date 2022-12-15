import { auth } from '../redux/auth-reducer';
const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false
}

let app_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state
    }
}

export let setInitialized = () => { return { type: SET_INITIALIZED } }

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(auth());
    promise.then(() => {
        dispatch(setInitialized());
    })
    // Promose.all([promise]).then(() => {
    //     dispatch(initializeApp());
    // })
    
}



export default app_reducer;