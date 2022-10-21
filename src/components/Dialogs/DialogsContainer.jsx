import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";

// const DialogsContainer1 = (props) => {


//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let onAddMessage = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }

//                     let onMessageUpdate = (message) => {
//                         store.dispatch(updateMessageActionCreator(message));
//                     }

//                     return (<Dialogs updateMessage={onMessageUpdate} addMessage={onAddMessage} dialog={state.dialog} />)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
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