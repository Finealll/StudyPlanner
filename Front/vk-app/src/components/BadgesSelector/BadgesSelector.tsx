
// @ts-ignore
import BadgesSelectorItem from "./BadgesSelectorItem.tsx";
import './BadgesSelector.css'
import {number} from "prop-types";

interface BadgesSelectorProps{
    items: BadgesSelectorItem[];
    onSelect: (item: BadgesSelectorItem) => void;
}

export const BadgesSelector = (props: BadgesSelectorProps) => {
    return <div className="badges-selector">
        {props.items ? props.items.map((badge: BadgesSelectorItem, index: number)=> {
            return <div key={index} className={`badge ${badge.isSelected ? 'badge-selected' : 'badge-unselected'}`} onClick={() => props.onSelect(badge)}>{badge.value}</div>
        }) : <></>}
    </div>
}