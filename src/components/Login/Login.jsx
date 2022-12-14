import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom"
import { required } from "../../utils/validators/validators";
import { Input } from '../../components/common/FormsControl/FormsControls';
import s from '../common/FormsControl/FormsControls.module.css'

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name="email" component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name="password" type="password" component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]} />remember me
            </div>
             {props.error && <div className={s.formSummaryError}>
                {props.error} 
            </div>}
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