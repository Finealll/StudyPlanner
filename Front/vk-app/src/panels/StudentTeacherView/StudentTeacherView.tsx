

import './StudentTeacherView.css'
// @ts-ignore
import {Calendar} from "../../components/Calendar/Calendar.tsx";
// @ts-ignore
import {UsersList} from "../../components/UsersList/UsersList.tsx";
// @ts-ignore
import {UsersListItem, UsersListItemProps} from "../../components/UsersList/UsersListItem.tsx";
// @ts-ignore
import {InfoBlock} from "../../components/InfoBlock/InfoBlock.tsx";
// @ts-ignore
import {DefaultLayout} from "../../layouts/DefaultLayout.tsx";
// @ts-ignore
import React, {useEffect, useState} from "react";
// @ts-ignore
import moment, {Moment} from "moment/moment";
import bridge from "@vkontakte/vk-bridge-mock";
// @ts-ignore
import {RemoveEventModal} from "../../components/Modals/RemoveEvent/RemoveEvent.tsx";
// @ts-ignore
import {AddEventModal} from "../../components/Modals/AddEvent/AddEventModal.tsx";

interface StudentTeacherViewProps {
    teacherId: string;

    go : () => void;
}

export const StudentTeacherView = (props: StudentTeacherViewProps) => {
    const [nearestLessons, setNearestLessons] = useState([
        {
            id: "a0142d14-d549-4a6d-ae9c-30f81e145eb7",
            name: "Геометрия",
            date: moment(),
            duration: 90,
            integrationName: null,
            integrationLink: null,
        },
        {
            id: "0a21890b-f78e-47fc-8453-f57a7cd72048",
            name: "Геометрия",
            date: moment(),
            duration: 240,
            integrationName: "Zoom",
            integrationLink: "https://www.zoom.com/",
        },
        {
            id: "4b1d6cf3-92fd-44f0-9676-525f95d8410c",
            name: "Арсений Дроздецкий",
            subject: null,
            date: null,
            duration: null,
            integrationName: null,
            integrationLink: null,
        },
    ]);
    const [fetchedTeacher, setFetchedTeacher] = useState({first_name:"Юлия"});
    const [showRemoveEventModal, setShowRemoveEventModal] = useState(false);
    const [showAddEventModal, setShowAddEventModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(moment());

    function getCalendarInfo(fromDate: Moment, toDate: Moment) {
        return []
    }

    function onClickCalendarDate(date: Moment){
        setSelectedDate(date);
        setShowAddEventModal(true);
    }

    return <DefaultLayout title={fetchedTeacher.first_name ? fetchedTeacher.first_name : ""} hasBack={true} backView="student-main" go={props.go} bodyPadding={"0"}>
        <div className="teacher-main-page">
            <Calendar getCalendarInfo={getCalendarInfo} onDayClick={onClickCalendarDate}/>
            <div className="teacher-main-page__nearest-lessons">
                {nearestLessons?.length > 0 ?
                    <UsersList title={"Ближайшие занятия:"}>
                        {nearestLessons ? nearestLessons.map((user: UsersListItemProps, index: number) => {
                            return <UsersListItem key={index} onCancel={() => setShowRemoveEventModal(true)} {...user}/>
                        }) : <></>}
                    </UsersList> :
                    <InfoBlock message={"На данный момент ближайшие события отсутствуют"} />
                }
            </div>
        </div>
        <RemoveEventModal onKeep={() => setShowRemoveEventModal(false)} onSave={() => alert("onSave")} show={showRemoveEventModal}/>
        <AddEventModal date={selectedDate} show={showAddEventModal} onClose={() => setShowAddEventModal(false)} onSave={() => setShowAddEventModal(false)}/>
    </DefaultLayout>
}