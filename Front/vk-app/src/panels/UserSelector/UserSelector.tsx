

import './UserSelector.css';
import {ButtonType} from "../../components/Buttons/Button";

interface UserSelectionProps {
    userSelect: (e) => void;
}

export const UserSelection = (props: UserSelectionProps) => {
    return <div className="users-selection">
        <div className="users-selection-title">Кто вы?</div>
        <div className="users-selection-teacher" onClick={props.userSelect} data-to="components">
            <div className="users-selection-teacher__logo"/>
            <div className="users-selection-teacher__title">я преподаватель</div>
        </div>
        <div className="users-selection-student" onClick={props.userSelect} data-to="components">
            <div className="users-selection-student__logo"/>
            <div className="users-selection-student__title">я студент</div>
        </div>
    </div>
}
