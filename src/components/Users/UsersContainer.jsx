import React from "react";
import { connect } from "react-redux";
import { followAC, unFollowAC, setUserAC } from '../../redux/users-reducer';
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        follow: (idUser) => { dispatch(followAC(idUser)); },
        unFollow: (idUser) => { dispatch(unFollowAC(idUser)); },
        setUsers: (users) => { dispatch(setUserAC(users)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);