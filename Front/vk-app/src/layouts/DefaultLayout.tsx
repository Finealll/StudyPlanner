import {ReactChild, ReactFragment, ReactPortal} from "react";
import './DefaultLayout.css'

export interface DefaultLayoutProps {
    title: string;
    children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    buttons?: ReactChild | ReactFragment | ReactPortal;
    hasBack: boolean;
    go: (el: string) => void;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
    return <div className="default-layout">
        <div className="default-layout__header">
            <div className="default-layout__header--left">
                {props.hasBack ? <div className="default-layout__header-back" onClick={(e) => props.go} data-to='components'/> : <></>}
                <div className="default-layout__header-title">{props.title}</div>
            </div>
            <div className="default-layout__header--right">
                {props.buttons}
            </div>
        </div>
        <div className="default-layout__body">
            {props.children}
        </div>
    </div>
}
