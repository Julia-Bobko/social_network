import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from './User';

let Users = ({ followingInprogress, unFollow, follow, ...props }) => {
    {
        return <div>
            <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} setPage={props.setPage} />
            {
                props.users.map((u) =>
                    <User user={u} followingInprogress={followingInprogress} unFollow={unFollow} follow={follow} />
                )
            }
        </div >
    }
}

export default Users;