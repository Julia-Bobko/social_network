import { getAllByAltText } from "@testing-library/react";
import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, changeTextActionCreator} from '../../../redux/profile-reducer';

const MyPost = (props) => {
  let postsElement = props.state.posts.map((p) => <Post message={p.message} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let changeText = () => {
    props.changeText(newPostElement.current.value);
  }

  return (
    <div>
      My Post
      <div>
        <div>
          <textarea onChange={changeText} ref={newPostElement} value={props.state.newPostText} />
        </div>
        <button onClick={addPost}>Add</button>
      </div>
      <div>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPost;