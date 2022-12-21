import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

let User = ({ user, followingInprogress, unFollow, follow}) => {
    {
        return <div>
            {
                <div>
                    <div className={s.imgProfile}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <button disabled={followingInprogress.some(id => id === user.id)} onClick={user.followed ? () => {
                        unFollow(user.id);
                    } :
                        () => {
                            follow(user.id);

                        }}> {user.followed ? 'unfollow' : 'follow'}</button>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.description}
                    </div>
                    <div>
                        user.location.country
                    </div>
                    <div>
                        user.location.city
                    </div>
                </div>
            }
        </div >
    }
}

export default User;