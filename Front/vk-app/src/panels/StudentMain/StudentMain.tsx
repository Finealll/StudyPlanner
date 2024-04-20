import './StudentMain.css'
// @ts-ignore
import {DefaultLayout, DefaultLayoutProps} from "../../layouts/DefaultLayout.tsx";
// @ts-ignore
import React, {useState} from "react";
// @ts-ignore
import {UsersList} from "../../components/UsersList/UsersList.tsx";
// @ts-ignore
import {UsersListItem, UsersListItemProps} from "../../components/UsersList/UsersListItem.tsx";
// @ts-ignore
import {InfoBlock} from "../../components/InfoBlock/InfoBlock.tsx";
// @ts-ignore
import moment from 'moment';
// @ts-ignore
import {Input, InputType} from "../../components/Input/Input.tsx";

export const StudentMain= (props: {go : () => void; goStudentTeacherView: (id: string) => void}) => {
    const [nearestLessons, setNearestLessons] = useState([
        {
            id: "a0142d14-d549-4a6d-ae9c-30f81e145eb7",
            name: "Юлия Королева",
            subject: "Алгебра",
            date: moment(),
            duration: 90,
            integrationName: "Zoom",
            integrationLink: "https://www.zoom.com/",
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

    function getLogOutButton() {
        return <div className="logout-button" onClick={props.go} data-to="user-selection"/>
    }

    return <DefaultLayout title="Главная" hasBack={false} go={props.go} buttons={getLogOutButton()} >
        <div className="student-main-page">
            <div className="student-main-page__nearest-lessons">
                {nearestLessons?.length > 0 ?
                    <>
                        <UsersList title={"Мои преподаватели:"}>
                            {nearestLessons ? nearestLessons.map((user: UsersListItemProps) => {
                                return <UsersListItem onCancel={() => alert(`Отмена ${user.name}`)} onClick={() => props.goStudentTeacherView(user.id)} {...user}/>
                            }) : <></>}
                        </UsersList>
                        <br/>
                        <div className="student-main-page__add-teacher">
                            <InfoBlock message={"Добавить преподавателя:"}/>
                            <br/>
                            <Input style={InputType.GRAY} placeholder="код преподавателя"
                                   onSubmit={(value) => alert(value)}/>
                        </div>
                    </> :
                    <div className="student-main-page__add-teacher">
                        <InfoBlock message={"Отсутствуют добавленные преподаватели. Самое время их добавить:"}/>
                        <br/>
                        <Input style={InputType.GRAY} placeholder="код преподавателя"
                               onSubmit={(value) => alert(value)}/>
                    </div>
                }
            </div>
        </div>
    </DefaultLayout>
}