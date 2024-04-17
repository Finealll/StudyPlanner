

import {ReactChild, ReactFragment, ReactPortal} from "react";
import './UsersList.css'

interface UsersListProps{
    children: boolean | ReactChild | ReactFragment | ReactPortal;
    title: string;
}

export const UsersList = (props: UsersListProps) => {
    return <div className="users-list">
        <div className="users-list-title">{props.title}</div>
        <div className="users-list-items">
            {props.children}
        </div>
    </div>;
}