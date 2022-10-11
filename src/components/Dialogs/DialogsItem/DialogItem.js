import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogsItem.module.css';

const DialogItem = (props) => {
    return (<div className={s.dialogItem}>
        <NavLink to={'/dialog/' + props.id}>
            {props.name}
        </NavLink>
    </div>)
}

export default DialogItem;