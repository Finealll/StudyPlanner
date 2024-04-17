
// @ts-ignore
import BadgesSelectorItem from "./BadgesSelectorItem.tsx";
import './BadgesSelector.css'

interface BadgesSelectorProps{
    items: BadgesSelectorItem[];
    onSelect: (item: BadgesSelectorItem) => void;
}

export const BadgesSelector = (props: BadgesSelectorProps) => {
    return <div className="badges-selector">
        {props.items ? props.items.map((badge: BadgesSelectorItem)=> {
            return <div className={`badge ${badge.isSelected ? 'badge-selected' : 'badge-unselected'}`} onClick={() => props.onSelect(badge)}>{badge.value}</div>
        }) : <></>}
    </div>
}