

import './Button.css'

export enum ButtonType {
    RED ,
    GREEN
}

interface ButtonProps {
    text: string,
    type: ButtonType,
    onClick?: () => void
}

export const Button = (props: ButtonProps) => {

    function getButtonClasses(): string {
        let classes = ['button']

        switch (props.type) {
            case ButtonType.RED:
                classes.push('button-red')
                break
            case ButtonType.GREEN:
                classes.push('button-green')
                break
        }

        return classes.join(' ')
    }

    return <div className={getButtonClasses()} onClick={props.onClick}>{props.text}</div>
}