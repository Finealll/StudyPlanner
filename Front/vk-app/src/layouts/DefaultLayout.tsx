import {ReactChild, ReactFragment, ReactPortal} from "react";
import './DefaultLayout.css'

export interface DefaultLayoutProps {
    title: string;
    children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    buttons?: ReactChild | ReactFragment | ReactPortal;
    hasBack?: boolean;
    backView?: string;
    bodyPadding?: string;
    go: () => void;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
    return <div className="default-layout">
        <div className="default-layout__header">
            <div className="default-layout__header--left">
                {props.hasBack ? <div className="default-layout__header-back" onClick={props.go} data-to={props.backView}/> : <></>}
                <div className="default-layout__header-title">{props.title}</div>
            </div>
            <div className="default-layout__header--right">
                {props.buttons}
            </div>
        </div>
        <div style={{padding: props.bodyPadding !== undefined ? props.bodyPadding : "0 20px"}} className="default-layout__body">
            {props.children}
        </div>
    </div>
}
