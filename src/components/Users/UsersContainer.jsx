import React from "react";
import { connect } from "react-redux";
import { follow, setTotalCount, getUsersThunkCreator, unFollow } from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    setPage = (p) => {
        this.props.getUsersThunkCreator(p, this.props.pageSize);
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
                followed={this.props.followed}
                followingInprogress={this.props.followingInprogress}
                unFollow ={this.props.unFollow}
                follow = {this.props.follow}
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
        followed: state.usersPage.followed,
        followingInprogress: state.usersPage.followingInprogress
    }
}

export default connect(mapStateToProps, { setTotalCount, getUsersThunkCreator, unFollow , follow})(UsersContainer);