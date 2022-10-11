import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
    const messageElements = props.messages.map((m) => <Message message={m.message} />)

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