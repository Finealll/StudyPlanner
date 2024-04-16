import {Div, Group, Separator, Subhead, Title} from "@vkontakte/vkui";
import { ReactChild, ReactFragment, ReactPortal } from "react";

interface ComponentWrapperProps{
    children: boolean | ReactChild | ReactFragment | ReactPortal;
    title: string;
    description: string;
}

export const ComponentWrapper = (props: ComponentWrapperProps) => {
    return <Group>
        <Div>
            <Title style={{ marginBottom: 4 }}>{props.title}</Title>
            <Subhead style={{ marginBottom: 2 }}>{props.description}</Subhead>
        </Div>
        <Separator/>
        <Div style={{display: "flex", justifyContent: "center"}}>{props.children}</Div>
    </Group>;
}