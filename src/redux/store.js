import profile_reducer from './profile-reducer';

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
        profile_reducer(this._state.profileInfo, action);
        this._rerenderEntireTree(this._state);
    }
}

export default store;

