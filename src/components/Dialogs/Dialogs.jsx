import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const dialogs = [
    { name: "Yuli", id: 1 },
    { name: "Valery", id: 2 },
    { name: "Olga", id: 3 },
    { name: "Kat", id: 4 },
]

const message = [
    { id: 1, message: "hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Love you" }
]
const dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
const messageElements = message.map((m) => <Message message={m.message} />)

const Dialogs = () => {
    return (
        <div >
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <textarea />
            <button>add</button>
        </div>

    )
}

export default Dialogs;