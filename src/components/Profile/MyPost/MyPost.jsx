import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
  return (
    <div>
      My Post
      <div>
        <div>
          <textarea />
        </div>
        <button>Add</button>
      </div>
      <div>
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPost;