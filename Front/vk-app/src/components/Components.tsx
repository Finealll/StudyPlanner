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

function Components ({ id, go}) {

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
    </Panel>
}

export default Components;