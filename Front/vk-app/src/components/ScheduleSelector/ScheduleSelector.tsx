

// @ts-ignore
import ScheduleSelectorItem from "./ScheduleSelectorItem.tsx";
import './ScheduleSelector.css'

interface ScheduleSelectorProps{
    items: ScheduleSelectorItem[];
    onSelect: (item: ScheduleSelectorItem) => void;
}

const dayOfWeekToText = [
    {
        id: 1,
        value: "пн"
    },
    {
        id: 2,
        value: "вт"
    },
    {
        id: 3,
        value: "ср"
    },
    {
        id: 4,
        value: "чт"
    },
    {
        id: 5,
        value: "пт"
    },
    {
        id: 6,
        value: "сб"
    },
    {
        id: 0,
        value: "вс"
    },
]

export const ScheduleSelector = (props: ScheduleSelectorProps) => {
    return <div className="schedule-selector">
        {dayOfWeekToText.map((day)=> {
            let item = props.items.find((item: ScheduleSelectorItem) => item.dayOfWeek === day.id);
            return <div className='schedule-selector-item'>
                <div className={`schedule ${item.isSelected ? 'schedule-selected' : 'schedule-unselected'}`}
                     onClick={() => props.onSelect(item)}>
                    {day.value}
                </div>
                {item.isSelected ? <div className="schedule-selector-item-time">{`${item.fromDate.format('HH:mm')}-${item.toDate.format('HH:mm')}`}</div> : <></>}

            </div>
        })}
    </div>
}