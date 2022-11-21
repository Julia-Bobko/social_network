import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux";


let mapDispatchToPropsForRedirect = (state) => ({
    isAuthorized: state.auth.isAuthorized
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuthorized) { return <Navigate to="/login" /> }

            return <Component{...this.props} />
        }
    }

    let connectRedirect = connect(mapDispatchToPropsForRedirect)(RedirectComponent)

    return connectRedirect;
}