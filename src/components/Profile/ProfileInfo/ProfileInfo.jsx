import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (<div>
      <div className={s.item}>
        <img src="https://bipbap.ru/wp-content/uploads/2017/05/maxresdefault-13.jpg" />
      </div>
      <div>
        ava+description
      </div>
    </div>
    )
  }

  export default ProfileInfo;