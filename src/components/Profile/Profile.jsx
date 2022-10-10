import React from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://bipbap.ru/wp-content/uploads/2017/05/maxresdefault-13.jpg" />
      </div>
      <div>
        ava+description
      </div>
      <MyPost />
    </div>
  )
}

export default Profile;