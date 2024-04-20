import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
} from '@vkontakte/vkui';
// @ts-ignore
import {InfoBlock} from './InfoBlock/InfoBlock.tsx';
// @ts-ignore
import {ComponentWrapper} from "./ComponentWrapper.tsx";
// @ts-ignore
import {UsersList} from "./UsersList/UsersList.tsx";
// @ts-ignore
import {UsersListItem, UsersListItemProps} from "./UsersList/UsersListItem.tsx";
// @ts-ignore
import {BadgesSelector} from "./BadgesSelector/BadgesSelector.tsx";
// @ts-ignore
import {Calendar, CalendarExternalDayProps} from "./Calendar/Calendar.tsx";
import {Moment} from "moment/moment";
// @ts-ignore
import getRange from "../utils/DateUtils.ts";
import * as moment from "moment/moment";
// @ts-ignore
import {Button, ButtonType} from "./Buttons/Button.tsx";
import {useState} from "react";
// @ts-ignore
import {ScheduleSelector} from "./ScheduleSelector/ScheduleSelector.tsx";
// @ts-ignore
import {IntegrationInfo} from "./IntegrationInfo/IntegrationInfo.tsx";
// @ts-ignore
import {Input, InputType} from "./Input/Input.tsx";
// @ts-ignore
import {Warning} from "./Warning/Warning.tsx";
// @ts-ignore
import {SubjectListItem} from "./SubjectsListItems/SubjectListItem.tsx";
// @ts-ignore
import Modal from "./Modal/Modal.tsx";
// @ts-ignore
import {SettingsBlockWrapper} from "./SettingsBlockWrapper/SettingsBlockWrapper.tsx";

const usersListMock = [
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
]

const badgesInitialState = [
    {
        id: 1,
        value: '30 минут',
        isSelected: true,
    },
    {
        id: 2,
        value: '45 минут',
        isSelected: true,
    },
    {
        id: 3,
        value: '1 час',
        isSelected: false,
    },
    {
        id: 4,
        value: '1 час 15 минут',
        isSelected: false,
    },
    {
        id: 5,
        value: '2 часа',
        isSelected: false,
    }
]

const sheduleMockInitialState = [
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
    }
]

const SubjectListMock = [
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
]

function Components ({ id, go}) {
    const [badgesMock, setBadgesMock] = useState(badgesInitialState);
    const [scheduleMock, setScheduleMock] = useState(sheduleMockInitialState);
    const [showModalWithHeader, setShowModalWithHeader] = useState(false);
    const [showModalWithoutHeader, setShowModalWithoutHeader] = useState(false);

    function updateBadgesMock(badge){
        let badges = [...badgesMock]
        let selectedBadge = badges.find((b) => b.id === badge.id)
        if(selectedBadge){
            selectedBadge.isSelected = !selectedBadge.isSelected
        }
        setBadgesMock(badges)
    }

    function updateSheduleMock(shedule){
        let shedules = [...scheduleMock]
        let selectedShedule = shedules.find((s) => s.id === shedule.id)
        if(selectedShedule){
            selectedShedule.isSelected = !selectedShedule.isSelected
        }
        setScheduleMock(shedules)
    }

    function getCalendarInfoMocks(fromDate: Moment, toDate: Moment): CalendarExternalDayProps[]{
        let calendarDates = getRange(fromDate, toDate, 'day')
        let result = []
        calendarDates.forEach((date) => {
            switch (date.day()){
                case 0:
                    result.push({
                        date: date,
                        disabled: true,
                        hasSpecialSchedule: false,
                        hasLessons: false
                    })
                    break
                case 1:
                    result.push({
                        date: date,
                        disabled: false,
                        hasSpecialSchedule: true,
                        hasLessons: false
                    })
                    break
                case 2:
                    result.push({
                        date: date,
                        disabled: false,
                        hasSpecialSchedule: false,
                        hasLessons: true
                    })
                    break
                case 3:
                    result.push({
                        date: date,
                        disabled: false,
                        hasSpecialSchedule: true,
                        hasLessons: true
                    })
                    break
            }
        })

        return result
    }

    function IntegrationCallback(needIntegration: boolean){
        if(needIntegration){
            alert("Интегрируемся...")
        } else {
            alert("Разинтегрируемся...")
        }
    }

    return <Panel id={id}>
        <PanelHeader
            before={<PanelHeaderBack onClick={go} data-to="home"/>}>Components</PanelHeader>
            <ComponentWrapper
                title={"Информационный блок"}
                description={"Позволяет указать некую информацию и заполнить пространство"}
            >
                <InfoBlock message={"Отсутствуют добавленные преподаватели.\n" +
                    "Самое время их добавить:"} />
            </ComponentWrapper>
        <ComponentWrapper
            title={"Список пользователей"}
            description={"Используется для перечня учеников и учителей"}
        >
            <UsersList title={"Ближайшие занятия:"}>
                {usersListMock ? usersListMock.map((user: UsersListItemProps) => {
                    return <UsersListItem onCancel={() => alert(`Отмена ${user.name}`)} {...user}/>
                }) : <></>}
            </UsersList>
        </ComponentWrapper>
        <ComponentWrapper
            title={"Элементы предметов"}
            description={"Элемены списка предметов"}
        >
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                {SubjectListMock.map((subject) => {
                    return <SubjectListItem {...subject} onDelete={(_) => alert(`Удалить: ${subject.name}`)}
                                            onEdit={(_) => alert(`Изменить: ${subject.name}`)}/>
                })}
            </div>
        </ComponentWrapper>
        <ComponentWrapper
            title={"Бейдж-селектор"}
            description={"Селектор из красивых бейджей"}
        >
            <BadgesSelector items={badgesMock} onSelect={updateBadgesMock} />
        </ComponentWrapper>
        <ComponentWrapper
            title={"Календарь"}
            description={"Календарик для отображения занятости преподавателя"}
        >
            <Calendar getCalendarInfo={getCalendarInfoMocks} onDayClick={(day) => alert(day)}/>
        </ComponentWrapper>
        <ComponentWrapper
            title={"Кнопки"}
            description={"Различного вида кнопаньки"}
        >
            <Button text={"Добавить"} type={ButtonType.GREEN} onClick={() => alert('Добавить')}/>
            <Button text={"Удалить"} type={ButtonType.RED} onClick={() => alert('Удалить')}/>
        </ComponentWrapper>
        <ComponentWrapper
            title={"Селектор расписания"}
            description={"Селектор расписания преподавателя в лк"}
        >
            <ScheduleSelector items={scheduleMock} onSelect={updateSheduleMock} />
        </ComponentWrapper>
        <ComponentWrapper
            title={"Информер интеграции"}
            description={"Информирует о наличии интеграции"}
        >
            <div style={{display: "flex", flexDirection: "column"}}>
                <IntegrationInfo integrated={false} email={null} onClickIntegration={IntegrationCallback} />
                <IntegrationInfo integrated={true} email="example@mail.ru" onClickIntegration={IntegrationCallback} />
            </div>
        </ComponentWrapper>
        <ComponentWrapper
            title={"Инпуты"}
            description={"Инпутят инпутируемое"}
        >
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <Input style={InputType.BLACK} placeholder="это тестовый плейсхолдер"
                       onSubmit={(value) => alert(value)}/>
                <Input style={InputType.GRAY} placeholder="это тестовый плейсхолдер"
                       onSubmit={(value) => alert(value)}/>
            </div>
        </ComponentWrapper>
        <ComponentWrapper
            title={"Warning"}
            description={"Вызывающее обращение"}
        >
            <Warning text={"При изменении обнаружены записи на изменяемое время. Подтвердить удаление?"}/>
        </ComponentWrapper>
        <ComponentWrapper
            title={"Модальное окно"}
            description={"Компонент для отображения модальных окон"}
        >
            <Button text={"Модалка с хедером"} type={ButtonType.GREEN} onClick={() => setShowModalWithHeader(!showModalWithHeader)}/>
            <Button text={"Модалка без хедера"} type={ButtonType.RED} onClick={() => setShowModalWithoutHeader(!showModalWithHeader)}/>
            <Modal hasHeader={true} title="Специальный график" show={showModalWithHeader}
                   onClose={() => setShowModalWithHeader(!showModalWithHeader)}>
                <div>Информация внутри модалки</div>
                <br/>
                <Button text={"Сохранить"} type={ButtonType.GREEN} onClick={() => setShowModalWithHeader(!showModalWithHeader)}/>
                <div style={{height: "10px"}}></div>
                <Button text={"Отменить"} type={ButtonType.RED} onClick={() => setShowModalWithHeader(!showModalWithHeader)}/>
            </Modal>
            <Modal hasHeader={false} show={showModalWithoutHeader}>
                <Warning text={"При изменении обнаружены записи на изменяемое время. Подтвердить удаление?"}/>
                <br/>
                <Button text={"Подтвердить"} type={ButtonType.GREEN}
                        onClick={() => setShowModalWithoutHeader(!showModalWithoutHeader)}/>
                <div style={{height: "10px"}}></div>
                <Button text={"Отменить"} type={ButtonType.RED}
                        onClick={() => setShowModalWithoutHeader(!showModalWithoutHeader)}/>
            </Modal>
        </ComponentWrapper>
        <ComponentWrapper
            title={"Враппер элемента настроек"}
            description={"Оболочка для блока в настройках"}
        >
            <SettingsBlockWrapper title={"Предметы"} getButtons={() => <></>}>
                <div>предмет</div>
            </SettingsBlockWrapper>
        </ComponentWrapper>
    </Panel>
}

export default Components;