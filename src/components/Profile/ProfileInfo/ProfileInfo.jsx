import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return (<Preloader />);
  }
  else
    return (<div key={props.userProfile.userId}>
      <div className={s.item}>
        <img src="https://bipbap.ru/wp-content/uploads/2017/05/maxresdefault-13.jpg" />
      </div>
      <div>
        {props.userProfile.fullName}
        ava+description
      </div>
    </div>
    )
}

export default ProfileInfo;