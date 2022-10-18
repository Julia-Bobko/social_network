import React from "react";
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();
    
    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageUpdate = (message) => {
        props.store.dispatch(updateMessageActionCreator(message));
    }

    return <Dialogs updateMessage={onMessageUpdate} addMessage={onAddMessage} dialog={state.dialog} />
}

export default DialogsContainer;