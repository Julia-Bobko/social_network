import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src="https://png.pngtree.com/png-vector/20210222/ourlarge/pngtree-red-rose-logo-jasmine-flowers-for-flower-shop-png-image_2933774.jpg"/>
     <div>{props.message}</div>
    </div>
  )
}

export default Post;