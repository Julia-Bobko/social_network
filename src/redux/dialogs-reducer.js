
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
    return state;
}

export default dialogs_reducer;