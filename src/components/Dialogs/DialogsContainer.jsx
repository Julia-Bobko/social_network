import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {compose} from 'redux'

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

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (Dialogs);