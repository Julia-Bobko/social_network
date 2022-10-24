const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";
let initialState = {
    posts: [
        { message: "hi", id: 1 },
        { message: "hello", id: 2 },
        { message: "yo", id: 2 }
    ],
    newPostText: "Hello"
}

let profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { message: state.newPostText, id: 3 }],
                newPostText: ''
            }
        case CHANGE_TEXT:
            return {
                ...state,
                newPostText: action.text
            }

        default: return state;
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST })

export let changeTextActionCreator = (text) => ({ type: CHANGE_TEXT, text: text })

export default profile_reducer;