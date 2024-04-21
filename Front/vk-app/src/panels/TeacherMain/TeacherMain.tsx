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
// @ts-ignore
import Modal from "../../components/Modal/Modal.tsx";
// @ts-ignore
import {Button, ButtonType} from "../../components/Buttons/Button.tsx";
// @ts-ignore
import {Input, InputType} from "../../components/Input/Input.tsx";
// @ts-ignore
import {Warning} from "../../components/Warning/Warning.tsx";
// @ts-ignore
import {SpecialScheduleModal} from "../../components/Modals/SpecialScedule/SpecialScheduleMoidal.tsx";
// @ts-ignore
import {SpecialScheduleAlert} from "../../components/Modals/SpecialSceduleAlert/SpecialSceduleAlert.tsx";

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
    const [showDayModal, setShowDayModal] = useState(false);
    const [showDayAlert, setShowDayAlert] = useState(false);
    const [specialSchedule, setSpecialSchedule] = useState({
        from: moment(),
        to: moment()
    })

    function getHeaderButtons() {
        return <>
            <div className="settings-button" onClick={props.go} data-to="teacher-profile"/>
            <div className="logout-button" onClick={props.go} data-to="user-selection"/>
        </>
    }

    function getCalendarInfo(fromDate: Moment, toDate: Moment) {
        return []
    }

    function onSelectCalendarDay(day: Moment){
        setShowDayModal(true)
    }

    return <DefaultLayout title="Главная" hasBack={false} go={props.go} buttons={getHeaderButtons()} bodyPadding={"0"}>
        <div className="teacher-main-page">
            <Calendar getCalendarInfo={getCalendarInfo} onDayClick={onSelectCalendarDay}/>
            <div className="teacher-main-page__nearest-lessons">
                {nearestLessons?.length > 0 ?
                    <UsersList title={"Ближайшие занятия"}>
                        {nearestLessons ? nearestLessons.map((user: UsersListItemProps, index: number) => {
                            return <UsersListItem key={index} onCancel={() => alert(`Отмена ${user.name}`)} {...user} onClick={() => {}}/>
                        }) : <></>}
                    </UsersList> :
                    <InfoBlock message={"На данный момент ближайшие события отсутствуют"} />
                }
            </div>
            <SpecialScheduleModal onClose={() => {setShowDayAlert(true);setShowDayAlert(true)}} show={showDayModal}/>
            <SpecialScheduleAlert onClose={() => {setShowDayAlert(false);setShowDayModal(false)}} show={showDayAlert} onSave={() => alert("onSave")}/>
        </div>
    </DefaultLayout>
}