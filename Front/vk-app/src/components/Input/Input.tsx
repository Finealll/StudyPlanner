

import './Input.css'

export enum InputType {
    BLACK ,
    GRAY
}

interface InputProps {
    placeholder?: string
    style: InputType
    onSubmit: (value: string) => void
}

export const Input = (props: InputProps) => {
    function getInputClasses(): string{
        let classes = ['input']
        switch (props.style){
            case InputType.BLACK:
                classes.push('input-black');
                break;
            case InputType.GRAY:
                classes.push('input-gray');
                break;
        }

        return classes.join(' ')
    }
    const handleKeyDown = (event: {
        target: any;
        key: string }) => {
        if (event.key === 'Enter') {
            console.log(event.target.value)
            props.onSubmit(event.target.value);
        }
    };

    return <input className={getInputClasses()} placeholder={props.placeholder} onKeyDown={handleKeyDown}/>
}