import {
    Panel,
    PanelHeader,
    Group,
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

const usersListMock = [
    {
        id: "a0142d14-d549-4a6d-ae9c-30f81e145eb7",
        name: "Ангелина Вятская",
        subject: "Геометрия",
        date: new Date(),
        duration: 90,
        integrationName: null,
        integrationLink: null,
    },
    {
        id: "0a21890b-f78e-47fc-8453-f57a7cd72048",
        name: "Никита Егоров",
        subject: "Геометрия",
        date: new Date(),
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

function Components ({ id, go}) {
    var badgesMock = [
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
            title={"Бейдж-селектор"}
            description={"Селектор из красивых бейджей"}
        >
            <BadgesSelector items={badgesMock} onSelect={(badge) => alert(badge.value)} />
        </ComponentWrapper>
    </Panel>
}

export default Components;