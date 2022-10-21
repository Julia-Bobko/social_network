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
    debugger
    switch (action.type) {
        case ADD_MESSAGE:
            debugger
            {
                let newState = { ...state };
                newState.messages = [...state.messages];
                let newMessage = {
                    message: state.newMessage,
                    id: 4
                }
                // state.messages.push(newMessage);
                // state.newMessage = "";
                // return state;
                newState.messages.push(newMessage);
                newState.newMessage = "";
                return newState;
            }
        case UPDATE_TEXT:
            {
                let newState = {...state};
                newState.newMessage = action.message;
                return newState;
            }

        default: return state;
    }
}

export let addMessageActionCreator = () => {
    let action = {
        type: ADD_MESSAGE
    }
    return action;
}

export let updateMessageActionCreator = (message) => {
    let action = {
        type: UPDATE_TEXT,
        message: message
    }
    return action;
}



export default dialogs_reducer;