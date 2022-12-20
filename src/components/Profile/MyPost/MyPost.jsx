import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from "redux-form";
import {required, maxLength} from '../../../utils/validators/validators';
import {TextArea} from '../../common/FormsControl/FormsControls';

const maxLength10 = maxLength(15);
const MyPost = React.memo((props) => {
  console.log('render');
  let postsElement = props.state.posts.map((p) => <Post message={p.message} />);

  let newPostElement = React.createRef();
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
});

let AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={TextArea} type={"textarea"} name={"newPostText"} validate={[required, maxLength10]} />
      <button>Add</button>
    </form>
  )
}

let AddPostFormRedux = reduxForm({ form: 'addPost' })(AddPostForm);

export default MyPost;