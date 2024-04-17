

import './UsersListItem.css'
// @ts-ignore
import cancelButton from '../../assets/icons/close.svgz';
// @ts-ignore
import durationToText from "../../utils/LessonDurationUtils.ts";

export interface UsersListItemProps {
    id: string;
    name: string;
    subject: string | null;
    date: Date | null;
    duration: number | null;
    integrationName: string | null;
    integrationLink: string | null;

    onCancel: (id: string) => void;
}

export const UsersListItem = (props: UsersListItemProps) => {
    return <div className="users-list-item">
        <div className="users-list-item-info">
            <div className="users-list-item-info-name">{props.name}</div>
            {props.date ? <>
                <div className="users-list-item-info-subject">{props.subject}</div>
                <div className="users-list-item-info-additional">
                    <span className="users-list-item-info-additional-time">{props.date.toLocaleString()}</span>
                    <span className="users-list-item-info-additional-duration">{`, ${durationToText(props.duration)}`}</span>
                    {props.integrationLink == null ? <></> :
                        <>
                            <span>{`, `}</span>
                            <span className="users-list-item-info-additional-integration" onClick={() => window.open(props.integrationLink)}>{props.integrationName}</span>
                        </>
                    }
                </div>
            </> : <div className="users-list-item-info-404">Ближайших занятий не запланировано</div>}
        </div>
        <div className="users-list-item-buttons">
            <div className="users-list-item-buttons-cancel" onClick={() => props.onCancel(props.id)}>
                <img src={cancelButton} alt="cancel"/>
            </div>
        </div>
    </div>
}