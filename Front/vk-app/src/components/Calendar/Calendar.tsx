

import './Calendar.css'
import {useCallback, useReducer, useState} from "react";
import * as moment from "moment";
import 'moment/locale/ru';
// @ts-ignore
import getRange from "../../utils/DateUtils.ts";
import {Moment} from "moment";
import {element} from "prop-types";

interface CalendarDayProps{
    date: Moment;

    disabled: boolean;
    notThisMonth: boolean;
    isWeekend: boolean;
    isCurrentDay: boolean;
    hasSpecialSchedule: boolean;
    hasLessons: boolean;
}

export interface CalendarExternalDayProps{
    date: Moment;
    disabled: boolean;
    hasSpecialSchedule: boolean;
    hasLessons: boolean;
}

interface CalendarProps {
    getCalendarInfo: (fromDate: Moment, toDate: Moment) => CalendarExternalDayProps[];
    onDayClick: (date: Moment) => void;
}

const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

const initialState = {value: moment.utc().startOf('month')};

function CurrentMonthReducer(state: { value: moment.Moment; }, action: { type: string; }) {
    switch (action.type) {
        case 'before':
            return {value: moment.utc(state.value).subtract(1, "month")};
        case 'after':
            return {value: moment.utc(state.value).add(1, "month")};
        default:
            return state;
    }
}
export const Calendar = (props: CalendarProps) => {
    const [currentMonthState, dispatchCurrentMonthState] = useReducer(CurrentMonthReducer, initialState);


    function getDays(){
        let fromDate = moment.utc(currentMonthState.value).startOf('month').startOf('week').startOf('day');
        let toDate   = moment.utc(currentMonthState.value).endOf('month').endOf('week').startOf('day');
        let calendarDates = getRange(fromDate, toDate, 'day')
        let calendarExternalData = props.getCalendarInfo(fromDate, toDate);
        console.log(calendarExternalData)
        let calendarData = calendarDates.map((date) => {
            let props = {
                date: date,
                disabled: false,
                notThisMonth: date.month() != currentMonthState.value.month(),
                isWeekend: date.day() % 6 == 0,
                isCurrentDay: date.dayOfYear() == moment().dayOfYear(),
                hasSpecialSchedule: false,
                hasLessons: false
            }
            let externalData = calendarExternalData.find((item) => item.date.dayOfYear() == date.dayOfYear())
            if(externalData){
                props.disabled = externalData.disabled
                props.hasLessons = externalData.hasLessons
                props.hasSpecialSchedule = externalData.hasSpecialSchedule
            }

            return props
        })

        function getDayClasses(date: CalendarDayProps): string {
            let classes = ['calendar-body__day'];
            if(date.disabled)
                classes.push('calendar-body__day--disabled');
            else{
                classes.push('calendar-body__day--enabled');
            }
            if(date.notThisMonth)
                classes.push('calendar-body__day--notThisMonth');
            if(date.isCurrentDay)
                classes.push('calendar-body__day--currentDay');
            if(date.isWeekend)
                classes.push('calendar-body__day--weekend');

            return classes.join(' ')
        }

        return <>
            {calendarData.map((dayProps: CalendarDayProps) => {
                return <div className={getDayClasses(dayProps)} onClick={dayProps.disabled ? () => true : () => props.onDayClick(dayProps.date)}>
                    <div className="calendar-body__day--indicators">
                        {dayProps.hasLessons ? <div className="calendar-body__day--indicators--hasLessons"></div> : <></>}
                        {dayProps.hasSpecialSchedule ? <div className="calendar-body__day--indicators--hasSpecialSchedule"></div> : <></>}
                    </div>
                    {dayProps.date.format('D')}
                </div>
            })}
        </>
    }

    return <div className="calendar">
        <div className="calendar-header">
            <div className="calendar-header__title">{currentMonthState.value.format("MMMM YYYY")}</div>
            <div className="calendar-header__buttons">
                <div className="calendar-header__buttons_before" onClick={() => dispatchCurrentMonthState({type: 'before'})}></div>
                <div className="calendar-header__buttons_after" onClick={() => dispatchCurrentMonthState({type: 'after'})}></div>
            </div>
        </div>
        <div className="calendar-body">
            <div className="calendar-body__weekdays">
                {weekdays.map((weekday: string) => {
                    return <div className="calendar-body__weekday">{weekday}</div>
                })}
            </div>
            <div className="calendar-body__days">
                {getDays()}
            </div>
        </div>
    </div>
}