const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT = "UPDATE-TEXT";

let initialState = {
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
    ],
    newMessage: ""
}

let dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { message: state.newMessage, id: 4 }],
                newMessage: ''
            }
        case UPDATE_TEXT:
            return {
                ...state,
                newMessage: action.message
            }
        default: return state;
    }
}

export let addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export let updateMessageActionCreator = (message) => ({ type: UPDATE_TEXT, message: message })

export default dialogs_reducer;