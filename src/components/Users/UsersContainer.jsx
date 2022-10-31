import React from "react";
import { connect } from "react-redux";
import { followAC, unFollowAC, setUserAC, setPageAc,setCountAc } from '../../redux/users-reducer';
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        follow: (idUser) => { dispatch(followAC(idUser)); },
        unFollow: (idUser) => { dispatch(unFollowAC(idUser)); },
        setUsers: (users) => { dispatch(setUserAC(users)); },
        setCurrentPage: (page) => { dispatch(setPageAc(page)); },
        setTotalCount:(count)=>{dispatch(setCountAc(count));}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);