const ADD_MESSAGE = "ADD-MESSAGE";

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
    ]
}

let dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { message: action.newMessage, id: 4 }]
            }
        default: return state;
    }
}

export let addMessageActionCreator = (newMessage) => ({ type: ADD_MESSAGE, newMessage })

export default dialogs_reducer;