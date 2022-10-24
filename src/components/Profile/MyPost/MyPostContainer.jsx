import { getAllByAltText } from "@testing-library/react";
import React from "react";
import { addPostActionCreator, changeTextActionCreator } from '../../../redux/profile-reducer';
import MyPost from "./MyPost";
import { connect } from "react-redux";

// const MyPostContainer1 = (props) => {
//   return (
//     <StoreContext.Consumer>{
//       (store) => {

//         let state = store.getState().profileInfo;

//         let onAddPost = () => {
//           store.dispatch(addPostActionCreator());
//         }

//         let onchangeText = (text) => {
//           store.dispatch(changeTextActionCreator(text));
//         }
//         return (<MyPost changeText={onchangeText} addPost={onAddPost} state={state} />)
//       }}
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    state: state.profileInfo
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostActionCreator()) },
    changeText: (text) => { dispatch(changeTextActionCreator(text)) }
  }
}

let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;