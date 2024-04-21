

import './SpecialSceduleModal.css'
// @ts-ignore
import Modal, {ModalProps} from "../../Modal/Modal.tsx";
// @ts-ignore
import {Input, InputType} from "../../Input/Input.tsx";
// @ts-ignore
import {Button, ButtonType} from "../../Buttons/Button.tsx";
// @ts-ignore
import React from "react";

interface SpecialScheduleModalProps extends ModalProps{
    onSave?: () => void;
    onGeneralSchedule?: () => void;
}

export const SpecialScheduleModal = (props: SpecialScheduleModalProps) => {
    return <Modal title="Специальный график" hasHeader={true} show={props.show} onClose={props.onClose}>
        <div className="special-schedule__duration">
            <div className="special-schedule__duration-from">
                <div className="special-schedule__duration-from-title">c</div>
                <div className="special-schedule__duration-from-inputs">
                    <Input style={InputType.BLACK} onSubmit={() => alert("from hours")}/>
                    <div className="special-schedule__duration-inputs-delimiter">:</div>
                    <Input style={InputType.BLACK} onSubmit={() => alert("from minutes")}/>
                </div>
            </div>
            <div className="special-schedule__duration-to">
                <div className="special-schedule__duration-to-title">по</div>
                <div className="special-schedule__duration-from-inputs">
                    <Input style={InputType.BLACK} onSubmit={() => alert("to hours")}/>
                    <div className="special-schedule__duration-inputs-delimiter">:</div>
                    <Input style={InputType.BLACK} onSubmit={() => alert("to minutes")}/>
                </div>
            </div>
        </div>
        <div className="special-schedule__buttons">
            {props.onSave ?
                <>
                    <Button text={"Сохранить"} type={ButtonType.GREEN} onClick={() => alert("Сохранить")}/>
                    <div style={{height: "10px"}}></div>
                </> :
                <></>
            }
            {props.onGeneralSchedule ?
                <>
                    <Button text={"Обший график"} type={ButtonType.GREEN} onClick={() => alert("Обший график")}/>
                    <div style={{height: "10px"}}></div>
                </> :
                <></>
            }
            {props.onClose ?
                <>
                    <Button text={"Отменить"} type={ButtonType.RED} onClick={props.onClose}/>
                    <div style={{height: "10px"}}></div>
                </> :
                <></>
            }
        </div>
    </Modal>
}