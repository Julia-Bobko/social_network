import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, setUsers, setCurrentPage, setTotalCount, setFetching } from '../../redux/users-reducer';
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then((response) => {
            this.props.setUsers(response.data.items);
            //this.props.setTotalCount(response.data.totalCount);
        })
    }

    setPage = (p) => {
        this.props.setCurrentPage(p);
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
            withCredentials: true
        }
         ).then((response) => {
            this.props.setFetching(false);  
        this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : ""}
            <Users
                setPage={this.setPage}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followed={this.props.followed}
            />
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followed:state.usersPage.followed
    }
}

export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalCount, setFetching })(UsersContainer);