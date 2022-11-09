import React from "react";
import { connect } from "react-redux";
import s from './Header.module.css';
import { setUserData,  } from '../../redux/auth-reducer';
import axios from "axios";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then((response) => {

            if (response.data.resultCode === 0) {
                this.props.setUserData(response.data.data);
            }
        })
    }
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer)