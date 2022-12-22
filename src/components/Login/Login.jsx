import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom"
import { required } from "../../utils/validators/validators";
import { Input, createField } from '../../components/common/FormsControl/FormsControls';
import s from '../common/FormsControl/FormsControls.module.css';

let LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login", "email", Input, [required])}
            {createField("Password", "password", Input, [required], { type: "password" })}
            {createField(null, "rememberMe", Input, [required], { type: "checkbox" }, "remember me")}
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField(null, "captcha", Input, [required])}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha );
    }

    if (props.isAuthorized) {
        return (<Navigate to="/profile" />)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login })(Login);