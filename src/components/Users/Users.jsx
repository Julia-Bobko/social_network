import axios from "axios";
import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
  
    }

    setPage = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        })
  
    }



    render() {
        let countPage = Math.ceil(this.props.totalCount / this.props.pageSize);
        let page = [];

        for (var i = 1; i <= countPage; i++) {
            page.push(i);
        }

        return <div>
            
            {page.map((p) => <span className={this.props.currentPage === p && s.selectedPage} onClick={()=>{this.setPage(p)}}>{p} </span>)}
            {
                this.props.users.map((u) =>
                    <div>
                        <div className={s.imgProfile}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <button onClick={u.follow ? () => { this.props.follow(u.id) } : () => { this.props.unFollow(u.id) }}> {u.follow ? 'follow' : 'unfollow'}</button>
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