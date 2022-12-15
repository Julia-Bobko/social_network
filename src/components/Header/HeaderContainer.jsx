import React from "react";
import { connect } from "react-redux";
import s from './Header.module.css';
import { setUserData, logout } from '../../redux/auth-reducer';
import Header from "./Header";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, { setUserData, logout })(HeaderContainer)