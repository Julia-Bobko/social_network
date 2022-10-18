import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/./dialogs-reducer';

const Dialogs = (props) => {

    const dialogsElements = props.dialog.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
    const messageElements = props.dialog.messages.map((m) => <Message message={m.message} />)
    let onAddMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageUpdate = (e) => {
        let message = e.target.value;
        props.dispatch(updateMessageActionCreator(message));
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
            <textarea onChange={onMessageUpdate} value={props.dialog.newMessage} />
            <button onClick={onAddMessage}>add</button>
        </div>

    )
}

export default Dialogs;