

import './Warning.css'
// @ts-ignore
import WarningIcon from '../../assets/icons/alert.svg'

interface WarningProps {
    text: string
}

export const Warning = (props: WarningProps) => {
    return <div className="warning-wrapper">
        <div className="warning-logo"/>
        <div className="warning-text">{props.text}</div>
    </div>
}