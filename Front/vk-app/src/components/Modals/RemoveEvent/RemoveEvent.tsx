

import './RemoveEvent.css'
// @ts-ignore
import Modal, {ModalProps} from "../../Modal/Modal.tsx";
// @ts-ignore
import {Warning} from "../../Warning/Warning.tsx";
// @ts-ignore
import {Button, ButtonType} from "../../Buttons/Button.tsx";
// @ts-ignore
import React from "react";



interface RemoveEventModalProps extends ModalProps{
    onKeep: () => void;
    onSave: () => void;
}

export const RemoveEventModal = (props: RemoveEventModalProps) => {

    return <Modal hasHeader={false} show={props.show} onClose={props.onClose} maxWidth="450px">
        <Warning text="Вы уверены, что хотите отменить событие?"/>
        <br/>
        <Button text={"Оставить"} type={ButtonType.GREEN} onClick={props.onKeep}/>
        <div style={{height: "7px"}}/>
        <Button text={"Удалить"} type={ButtonType.RED} onClick={props.onClose}/>
    </Modal>
}