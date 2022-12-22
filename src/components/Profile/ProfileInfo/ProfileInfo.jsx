import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "../Status/ProfileStatusWithHook";
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return (<Preloader />);
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
     props.savePhoto(e.target.files[0]); 
    }
  }


  return (<div key={props.userProfile.userId}>
    <ProfileStatusWithHook status={props.status} UpdateStatus={props.UpdateStatus} />
    <div className={s.item}>
      <img src={(props.userProfile.photos.small) ? props.userProfile.photos.small : userPhoto} />
      {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
    </div>
    <div>
      {props.userProfile.fullName}
      ava+description
    </div>
  </div>
  )
}

export default ProfileInfo;