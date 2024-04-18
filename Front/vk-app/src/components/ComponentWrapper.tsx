import {Button, Div, Group, Separator, Subhead, Title} from "@vkontakte/vkui";
import {ReactChild, ReactFragment, ReactPortal, useState} from "react";
import './ComponentsWrapper.css'

interface ComponentWrapperProps{
    children: boolean | ReactChild | ReactFragment | ReactPortal;
    title: string;
    description: string;
}

export const ComponentWrapper = (props: ComponentWrapperProps) => {
    const [hidden, setHidden] = useState(false);

    return <Group>
        <Div className="component-wrapper-header">
            <div>
                <Title style={{ marginBottom: 4 }}>{props.title}</Title>
                <Subhead style={{ marginBottom: 2 }}>{props.description}</Subhead>
            </div>
            <div>
                <Button onClick={() => setHidden(!hidden)}>{hidden ? 'Свернуть' : 'Развернуть'}</Button>
            </div>
        </Div>
        {hidden ? <>
            <Separator/>
            <Div className="component-wrapper-body">{props.children}</Div>
        </> : <></>
        }
    </Group>;
}