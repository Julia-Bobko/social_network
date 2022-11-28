import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import { compose } from 'redux'

const mapStateToProps = (state) => {
    return {
        dialog: state.dialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (Dialogs);