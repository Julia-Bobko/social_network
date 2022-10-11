import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
   
    const active =  (a) => { 
        return a.isActive ? s.active : s.item;
    }

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={active}> Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={active}> Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={active}> News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={active}> Music</NavLink>
            </div>
            <div>
                <NavLink to="/setting" className={active}> Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;