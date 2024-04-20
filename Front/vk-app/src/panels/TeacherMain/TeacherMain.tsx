// @ts-ignore
import {DefaultLayout, DefaultLayoutProps} from "../../layouts/DefaultLayout.tsx";
// @ts-ignore
import React, {useState} from "react";
// @ts-ignore
import {Calendar} from "../../components/Calendar/Calendar.tsx";
import './TeacherMain.css'
// @ts-ignore
import {UsersList} from "../../components/UsersList/UsersList.tsx";
// @ts-ignore
import {UsersListItem, UsersListItemProps} from "../../components/UsersList/UsersListItem.tsx";
// @ts-ignore
import {InfoBlock} from "../../components/InfoBlock/InfoBlock.tsx";
// @ts-ignore
import moment, {Moment} from "moment";

export const TeacherMain = (props: {go : () => void}) => {
    const [nearestLessons, setNearestLessons] = useState([
        {
            id: "a0142d14-d549-4a6d-ae9c-30f81e145eb7",
            name: "Ангелина Вятская",
            subject: "Геометрия",
            date: moment(),
            duration: 90,
            integrationName: null,
            integrationLink: null,
        },
        {
            id: "0a21890b-f78e-47fc-8453-f57a7cd72048",
            name: "Никита Егоров",
            subject: "Геометрия",
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

    function getHeaderButtons() {
        return <>
            <div className="settings-button" onClick={props.go} data-to="teacher-profile"/>
            <div className="logout-button" onClick={props.go} data-to="user-selection"/>
        </>
    }

    function getCalendarInfo(fromDate: Moment, toDate: Moment) {
        return []
    }

    return <DefaultLayout title="Главная" hasBack={false} go={props.go} buttons={getHeaderButtons()} bodyPadding={"0"}>
        <div className="teacher-main-page">
            <Calendar getCalendarInfo={getCalendarInfo} onDayClick={(day) => alert(day)}/>
            <div className="teacher-main-page__nearest-lessons">
                {nearestLessons?.length > 0 ?
                    <UsersList title={"Ближайшие занятия:"}>
                        {nearestLessons ? nearestLessons.map((user: UsersListItemProps) => {
                            return <UsersListItem onCancel={() => alert(`Отмена ${user.name}`)} {...user}/>
                        }) : <></>}
                    </UsersList> :
                    <InfoBlock message={"На данный момент ближайшие события отсутствуют"} />
                }
            </div>
        </div>
    </DefaultLayout>
}