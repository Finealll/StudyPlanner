import {Moment} from "moment";


interface ScheduleSelectorItem {
    id: number;
    dayOfWeek: number;
    isSelected: boolean;
    fromDate: Moment;
    toDate: Moment;
}

export default ScheduleSelectorItem;