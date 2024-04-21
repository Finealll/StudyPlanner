import './RemoveTeacher.css'
// @ts-ignore
import Modal, {ModalProps} from "../../Modal/Modal.tsx";
// @ts-ignore
import React, {useState} from "react";
// @ts-ignore
import {Button, ButtonType} from "../../Buttons/Button.tsx";
// @ts-ignore
import {Warning} from "../../Warning/Warning.tsx";


interface RemoveTeacherModalProps extends ModalProps{
    title: string,

    onKeep: () => void;
    onSave: () => void;
}

export const RemoveTeacherModal = (props: RemoveTeacherModalProps) => {

    return <Modal hasHeader={false} show={props.show} onClose={props.onClose} maxWidth="450px">
        <Warning text={props.title}/>
        <br/>
        <Button text={"Оставить"} type={ButtonType.GREEN} onClick={props.onKeep}/>
        <div style={{height: "7px"}}/>
        <Button text={"Удалить"} type={ButtonType.RED} onClick={props.onClose}/>
    </Modal>
}