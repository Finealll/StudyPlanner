

import './SpecialSceduleAlert.css'
// @ts-ignore
import Modal, {ModalProps} from "../../Modal/Modal.tsx";
// @ts-ignore
import {Button, ButtonType} from "../../Buttons/Button.tsx";
// @ts-ignore
import React from "react";
// @ts-ignore
import {Warning} from "../../Warning/Warning.tsx";

interface SpecialScheduleAlertProps extends ModalProps{
    onSave: () => void;
}

export const SpecialScheduleAlert = (props: SpecialScheduleAlertProps) => {
    return <Modal hasHeader={false} show={props.show}>
        <div className="teacher-special-scedule-alert">
            <Warning text={"При изменении обнаружены записи на изменяемое время. Подтвердить удаление?"}/>
            <div style={{height: "10px"}}></div>
            <Button text={"Удалить и сохранить"} type={ButtonType.GREEN} onClick={props.onSave}/>
            <div style={{height: "10px"}}></div>
            <Button text={"Отмена"} type={ButtonType.GREEN} onClick={props.onClose}/>
        </div>
    </Modal>
}