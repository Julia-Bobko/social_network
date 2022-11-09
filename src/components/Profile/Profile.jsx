import React from "react";
import MyPost from "./MyPost/MyPost";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo userProfile={props.userProfile} />
      <MyPostContainer/>
    </div>
  )
}

export default Profile;