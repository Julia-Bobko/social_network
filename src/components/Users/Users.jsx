import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

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
                            <NavLink to={'/profile/'+u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>
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
                )
            }
        </div >
    }
}

export default Users;