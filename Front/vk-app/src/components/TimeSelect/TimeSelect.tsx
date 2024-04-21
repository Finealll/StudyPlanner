

import './TimeSelect.css'
import {ReactNode, useState} from "react";
// @ts-ignore
import moment from "moment";

interface TimeSelectProps{
    getAvailableHours: () => Array<number>;
    getAvailableMinutes: () => Array<number>;

    onSelectTime: (Moment) => void;
}

export function TimeSelect(props: TimeSelectProps){
    const [selectedHours, setSelectedHours] = useState<number | null>(null);
    const [selectedMinutes, setSelectedMinutes] = useState<number | null>(null);

    function getAvailableHours(): ReactNode {
        return props.getAvailableHours().map((hour: number, index: number) => {
            return <option key={index} value={hour}>{hour}</option>;
        });
    }

    function getAvailableMinutes(): ReactNode {
        return props.getAvailableHours().map((minute: number, index: number) => {
            return <option key={index} value={minute}>{minute}</option>;
        });
    }

    function selectTime(minutes: number): void {
        setSelectedMinutes(minutes);
        props.onSelectTime(moment(Date.UTC(0, 0, 0, selectedHours, selectedMinutes)));
    }

    return <div className="time-select">
        <select className="time-select__hours" onChange={(event) => {setSelectedHours(Number(event.target.value))}}>{getAvailableHours()}</select>
        <select disabled={selectedHours === null} onChange={(event) => {selectTime(Number(event.target.value))}} className="time-select__minutes">{getAvailableMinutes()}</select>
    </div>
}