

import './SettingsBlockWrapper.css'
import {ReactChild, ReactFragment, ReactPortal} from "react";

interface SettingsBlockWrapperProps{
    children: boolean | ReactChild | ReactFragment | ReactPortal;
    getButtons?: () => ReactChild | ReactFragment | ReactPortal;
    title: string
}

export const SettingsBlockWrapper = (props: SettingsBlockWrapperProps) => {

    return <div className="settings-block-wrapper">
        <div className="settings-block-wrapper__header">
            <div className="settings-block-wrapper__title">{props.title}</div>
            <div className="settings-block-wrapper__buttons">{props?.getButtons ? props?.getButtons() : <></>}</div>
        </div>
        <div className="settings-block-wrapper__body">
            {props.children}
        </div>
    </div>;
}