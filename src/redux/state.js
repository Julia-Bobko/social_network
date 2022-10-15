const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";

let store = {
    _state: {
        dialog: {
            dialogs: [
                { name: "Yuli", id: 1 },
                { name: "Valery", id: 2 },
                { name: "Olga", id: 3 },
                { name: "Kat", id: 4 }
            ],
            messages: [
                { id: 1, message: "hi" },
                { id: 2, message: "Hello" },
                { id: 3, message: "Love you" }
            ]
        },
        profileInfo: {
            posts: [
                { message: "hi", id: 1 },
                { message: "hello", id: 2 },
                { message: "yo", id: 2 }
            ],
            newPostText: "Hello"
        }
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
        console.log("ddd");
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profileInfo.newPostText,
                id: 3
            }
            this._state.profileInfo.posts.push(newPost);
            this._state.profileInfo.newPostText = "";
            this._rerenderEntireTree(this._state);
        }
        else if (action.type === CHANGE_TEXT) {
            this._state.profileInfo.newPostText = action.text;
            this._rerenderEntireTree(this._state);
        }
    }
}

export let addPostActionCreator = () => {
    return { type: ADD_POST };
}

export let changeTextActionCreator = (text) => {
    return { type: CHANGE_TEXT, text: text };
}

export default store;

