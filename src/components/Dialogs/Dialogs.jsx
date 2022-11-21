import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {

    let state = props.dialog;
    const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
    const messageElements = state.messages.map((m) => <Message message={m.message} />)
    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageUpdate = (e) => {
        let message = e.target.value;
        props.updateMessage(message);
    }

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
            <textarea onChange={onMessageUpdate} value={state.newMessage} />
            <button onClick={onAddMessage}>add</button>
        </div>

    )
}

export default Dialogs;