

import './TeacherProfile.css'
// @ts-ignore
import {DefaultLayout} from "../../layouts/DefaultLayout.tsx";
// @ts-ignore
import React, {useEffect, useState} from "react";
import bridge from "@vkontakte/vk-bridge-mock";
import {Avatar} from "@vkontakte/vkui";
import * as url from "node:url";
// @ts-ignore
import {SettingsBlockWrapper} from "../../components/SettingsBlockWrapper/SettingsBlockWrapper.tsx";
// @ts-ignore
import {SubjectListItem} from "../../components/SubjectsListItems/SubjectListItem.tsx";
// @ts-ignore
import {BadgesSelector} from "../../components/BadgesSelector/BadgesSelector.tsx";
// @ts-ignore
import {ScheduleSelector} from "../../components/ScheduleSelector/ScheduleSelector.tsx";
import * as moment from "moment";
// @ts-ignore
import {IntegrationInfo} from "../../components/IntegrationInfo/IntegrationInfo.tsx";
// @ts-ignore
import {InfoBlock} from "../../components/InfoBlock/InfoBlock.tsx";


interface TeacherSettingsProps {
    go: () => void
}

export const TeacherProfile = (props: TeacherSettingsProps) => {
    const [currentVkUserInfo, setCurrentVkUserInfo] = useState(null);
    const [breakIntervalInfo, setBreakIntervalInfo] = useState([
        {
            id: 1,
            value: 'без перерыва',
            isSelected: true,
        },
        {
            id: 2,
            value: '5 минут',
            isSelected: true,
        },
        {
            id: 3,
            value: '10 минут',
            isSelected: false,
        },
        {
            id: 4,
            value: '15 минут',
            isSelected: false,
        },
        {
            id: 5,
            value: '20 минут',
            isSelected: false,
        }]);
    const [scheduleInfo, setScheduleInfo] = useState([
        {
            id: 1,
            dayOfWeek: 1,
            isSelected: true,
            fromDate: moment().startOf('hour'),
            toDate: moment().startOf('hour').add(1, 'hour'),
        },
        {
            id: 2,
            dayOfWeek: 2,
            isSelected: true,
            fromDate: moment().startOf('hour'),
            toDate: moment().startOf('hour').add(1, 'hour'),
        },
        {
            id: 3,
            dayOfWeek: 3,
            isSelected: false,
            fromDate: moment().startOf('hour'),
            toDate: moment().startOf('hour').add(1, 'hour'),
        },
        {
            id: 4,
            dayOfWeek: 4,
            isSelected: false,
            fromDate: moment().startOf('hour'),
            toDate: moment().startOf('hour').add(1, 'hour'),
        },
        {
            id: 5,
            dayOfWeek: 5,
            isSelected: false,
            fromDate: moment().startOf('hour'),
            toDate: moment().startOf('hour').add(1, 'hour'),
        },
        {
            id: 6,
            dayOfWeek: 6,
            isSelected: true,
            fromDate: moment().startOf('hour'),
            toDate: moment().startOf('hour').add(1, 'hour'),
        },
        {
            id: 7,
            dayOfWeek: 0,
            isSelected: false,
            fromDate: moment().startOf('hour'),
            toDate: moment().startOf('hour').add(1, 'hour'),
        }]);
    const [subjectsList, setSubjectsList] = useState([
        {
            id: 1,
            name: 'Геометрия',
            durations: [30, 60, 90, 120],
        },
        {
            id: 2,
            name: 'Математика',
            durations: [60, 120],
        }
    ]);
    const [integrationStatus, setIntegrationStatus] = useState({integrated: false, email: "test@test.test"});


    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            console.log(user)
            setCurrentVkUserInfo(user)
        }
        fetchData();
    }, []);

    function onClickShareUserLink(){
        alert("Share")
    }

    function getHeaderButtons() {
        return <>
            <div className="share-button" onClick={onClickShareUserLink}/>
        </>
    }

    function updateScheduleInfo(schedule){
        let shedules = [...scheduleInfo]
        let selectedShedule = shedules.find((s) => s.id === schedule.id)
        if(selectedShedule){
            selectedShedule.isSelected = !selectedShedule.isSelected
        }
        setScheduleInfo(shedules)
    }

    function updateBreakingIntervalInfo(badge){
        let badges = [...breakIntervalInfo]
        let selectedBadge = badges.find((b) => b.id === badge.id)
        if(selectedBadge){
            selectedBadge.isSelected = !selectedBadge.isSelected
        }
        setBreakIntervalInfo(badges)
    }

    function integrationCallback(needIntegration: boolean){
        if(needIntegration){
            setIntegrationStatus({integrated: true, email: "test@test.test"});
        } else {
            setIntegrationStatus({integrated: false, email: "test@test.test"});
        }
    }

    function getSubjectsButtons(){
        console.log("getButtons")
        return <>
            <div className="add-button" onClick={onAddSubjectsButtonClick}/>
        </>
    }

    function onAddSubjectsButtonClick(){
        alert("Add subject button clicked")
    }

    return <DefaultLayout title="Профиль" hasBack={true} backView="teacher-main" go={props.go} data-to={"teacher-main"} buttons={getHeaderButtons()}>
        <div className="teacher-profile">
            <div className="teacher-profile__header">
                {currentVkUserInfo?.photo_200 ? <div style={{backgroundImage: `url(${currentVkUserInfo?.photo_200})`}} className={"teacher-profile__header-logo"}/> : null}
                <div className="teacher-profile__header-title">{currentVkUserInfo?.first_name}</div>
            </div>
            <SettingsBlockWrapper title={"График"}>
                <ScheduleSelector items={scheduleInfo} onSelect={updateScheduleInfo} />
            </SettingsBlockWrapper>
            <SettingsBlockWrapper title={"Интервал перерыва"}>
                <BadgesSelector items={breakIntervalInfo} onSelect={updateBreakingIntervalInfo} />
            </SettingsBlockWrapper>
            <SettingsBlockWrapper title={"Интеграция с zoom"}>
                <IntegrationInfo integrated={integrationStatus.integrated} email={integrationStatus.email} onClickIntegration={integrationCallback} />
            </SettingsBlockWrapper>
            <SettingsBlockWrapper title={"Предметы"} getButtons={getSubjectsButtons}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
                    {subjectsList ?
                        subjectsList.map((subject) => {
                        return <SubjectListItem {...subject} onDelete={(_) => alert(`Удалить: ${subject.name}`)}
                                                onEdit={(_) => alert(`Изменить: ${subject.name}`)}/>
                        }) :
                        <InfoBlock message={"Необходимо добавить предметы"} />
                    }
                </div>
            </SettingsBlockWrapper>
        </div>
    </DefaultLayout>
}