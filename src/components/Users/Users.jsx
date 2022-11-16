import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import axios from "axios";
import {userAPI} from '../../api/api';

let Users = (props) => {
    {
        let countPage = Math.ceil(props.totalCount / props.pageSize);
        let page = [];

        for (var i = 1; i <= countPage; i++) {
            page.push(i);
        }

        return <div>

            {page.map((p) => <span className={props.currentPage === p && s.selectedPage} onClick={() => { props.setPage(p) }}>{p} </span>)}
            {
                props.users.map((u) =>
                    <div>
                        <div className={s.imgProfile}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <button disabled={props.followingInprogress.some(id => id === u.id)} onClick={u.followed ? () => {
                            props.unFollow(u.id);
                        } :
                            () => {
                                props.follow(u.id);

                            }}> {u.followed ? 'unfollow' : 'follow'}</button>
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
                )
            }
        </div >
    }
}

export default Users;