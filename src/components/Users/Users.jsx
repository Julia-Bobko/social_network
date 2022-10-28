import axios from "axios";
import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                props.setUsers(response.data.items);
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map((u) =>
                <div>
                    <div className={s.imgProfile}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <button onClick={u.follow ? () => { props.follow(u.id) } : () => { props.unFollow(u.id) }}> {u.follow ? 'follow' : 'unfollow'}</button>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.description}
                    </div>
                    <div>
                        u.location.country
                    </div>
                    <div>
                        u.location.city
                    </div>
                </div>
            )}
    </div>
}

export default Users;