import * as moment from "moment";
import 'moment/locale/ru';

function getRange(startDate, endDate, type) {
    let fromDate = moment.utc(startDate)
    let toDate = moment.utc(endDate)
    let diff = toDate.diff(fromDate, type)
    let range = []
    for (let i = 0; i <= diff; i++) {
        range.push(moment.utc(startDate).add(i, type))
    }
    return range
}

export default getRange;