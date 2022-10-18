import { getAllByAltText } from "@testing-library/react";
import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import { addPostActionCreator, changeTextActionCreator } from '../../../redux/profile-reducer';
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

  let state = props.store.getState().profileInfo;

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onchangeText = (text) => {
    props.store.dispatch(changeTextActionCreator(text));
  }

  return <MyPost changeText={onchangeText} addPost={onAddPost} state={state} />
}

export default MyPostContainer;