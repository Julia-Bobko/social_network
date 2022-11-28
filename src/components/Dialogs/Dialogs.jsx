import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";

const Dialogs = (props) => {

    let state = props.dialog;
    const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
    const messageElements = state.messages.map((m) => <Message message={m.message} />)

    let onAddMessage = (value) => {
        props.addMessage(value.newMessage);
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
            <NewMessageFormRedux onSubmit={onAddMessage} />
        </div>
    )
}

let NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} type={"input"} name={"newMessage"} />
            <button>add</button>
        </form>
    )
}

let NewMessageFormRedux = reduxForm({ form: 'newMessage' })(NewMessageForm);

export default Dialogs;