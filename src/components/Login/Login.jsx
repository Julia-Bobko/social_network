import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom"

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type="password" component={"input"} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuthorized) {
        debugger
        return (<Navigate to="/profile" />)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, { login })(Login);