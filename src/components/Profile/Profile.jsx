import React from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.profileInfo.posts} newPostText={props.profileInfo.newPostText} addPost={props.addPost} changeText={props.changeText} />
    </div>
  )
}

export default Profile;