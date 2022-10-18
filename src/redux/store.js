import profile_reducer from './profile-reducer';
import dialogs_reducer from './dialogs-reducer';

let store = {
    _state: {
        dialog: {
            dialogs: [
                { name: "Yuli", id: 1 },
                { name: "Valery", id: 2 },
                { name: "Olga", id: 3 },
                { name: "Katia", id: 4 }
            ],
            messages: [
                { id: 1, message: "hi" },
                { id: 2, message: "Hello" },
                { id: 3, message: "Love you" }
            ]
        },
        profileInfo: {
            posts: [
                { message: "Julia", id: 1 },
                { message: "Hey", id: 2 },
                { message: "how are you", id: 2 }
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
        this._state.profileInfo = profile_reducer(this._state.profileInfo, action);
        this._state.dialog = dialogs_reducer(this._state.dialog, action);
        this._rerenderEntireTree(this._state);
    }
}

export default store;

