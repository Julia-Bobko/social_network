import { getAllByAltText } from "@testing-library/react";
import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from "redux-form";

const MyPost = (props) => {
  let postsElement = props.state.posts.map((p) => <Post message={p.message} />);

  let addPost = (newPost) => {
    props.addPost(newPost.newPostText);
  }

  return (
    <div>
      My Post
      <AddPostFormRedux onSubmit={addPost} />
      <div>
        {postsElement}
      </div>
    </div>
  )
}

let AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field type={"textarea"} component={"input"} name={"newPostText"} />
      <button>Add</button>
    </form>
  )
}

let AddPostFormRedux = reduxForm({ form: 'addPost' })(AddPostForm);

export default MyPost;