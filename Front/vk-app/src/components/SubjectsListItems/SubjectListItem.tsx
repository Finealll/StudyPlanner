

import './SubjectListItem.css'
// @ts-ignore
import durationToText from '../../utils/LessonDurationUtils.ts'


export interface SubjectListItemProps {
    id: number;
    name: string;
    durations: number[];

    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

export const SubjectListItem = (props: SubjectListItemProps) => {
    function getDurationsText(){
        let durationsText = props.durations.map(elem => {return durationToText(elem)})
        return durationsText.join(', ')
    }

    return <div className="subjectListItem">
        <div className="subjectListItem__info">
            <div className="subjectListItem__info-name">{props.name}</div>
            <div className="subjectListItem__info-durations">{getDurationsText()}</div>
        </div>
        <div className="subjectListItem__buttons">
            <div className="subjectListItem__buttons-edit" onClick={() => props.onEdit(props.id)}></div>
            <div className="subjectListItem__buttons-delete" onClick={() => props.onDelete(props.id)}></div>
        </div>
    </div>
}