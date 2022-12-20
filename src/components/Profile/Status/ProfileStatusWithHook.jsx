import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.UpdateStatus(status)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (<div>
        {(!editMode) &&
            <div>
                <span onDoubleClick={activateMode} >{props.status || '-----'} </span>
            </div>
        }
        {editMode &&
            <div>
                <input className="background:black" onBlur={deactivateMode} autoFocus={true} onChange={onChangeStatus} value={status} />
            </div>
        }
    </div>
    )
}



export default ProfileStatusWithHook;