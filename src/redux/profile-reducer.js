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
            {
                let newPost = {
                    message: state.newPostText,
                    id: 3
                }
                state.posts.push(newPost);
                state.newPostText = "";
                return state;
            }
        case CHANGE_TEXT:
            {
                state.newPostText = action.text;
                return state;
            }

        default: return state;
    }
}

export let addPostActionCreator = () => {
    return { type: ADD_POST };
}

export let changeTextActionCreator = (text) => {
    return { type: CHANGE_TEXT, text: text };
}

export default profile_reducer;