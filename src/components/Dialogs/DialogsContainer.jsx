import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialog: state.dialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (message) => {
            dispatch(updateMessageActionCreator(message));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;