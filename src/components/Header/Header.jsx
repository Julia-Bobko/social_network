import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {

    return (<header className={s.header}>
        <img src="https://w7.pngwing.com/pngs/733/869/png-transparent-logo-motif-design-white-logo-flower.png" />
        {(props.isAuthorized) ? <div> {props.login}</div> : <NavLink to="/login">login</NavLink>}
    </header>)
}

export default Header;