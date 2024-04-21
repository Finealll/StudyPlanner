

import './AddEventModal.css'
// @ts-ignore
import Modal, {ModalProps} from "../../Modal/Modal.tsx";
// @ts-ignore
import {Input, InputType} from "../../Input/Input.tsx";
// @ts-ignore
import {Button, ButtonType} from "../../Buttons/Button.tsx";
// @ts-ignore
import React, {useState} from "react";
import {Moment} from "moment";
import 'moment/locale/ru';
// @ts-ignore
import {SettingsBlockWrapper} from "../../SettingsBlockWrapper/SettingsBlockWrapper.tsx";
// @ts-ignore
import {BadgesSelector} from "../../BadgesSelector/BadgesSelector.tsx";
// @ts-ignore
import {TimeSelect} from "../../TimeSelect/TimeSelect.tsx";

interface AddEventModalProps extends ModalProps{
    date: Moment;
    onSave?: () => void;
}

export const AddEventModal = (props: AddEventModalProps) => {
    const [lessonsSelect, setLessonsSelect] = useState([
        {
            id: 1,
            value: 'Математика',
            isSelected: true,
        },
        {
            id: 2,
            value: 'Геометрия',
            isSelected: true,
        },
    ]);
    const [durationSelect, setDurationSelect] = useState([
        {
            id: 1,
            value: '30 минут',
            isSelected: true,
        },
        {
            id: 2,
            value: '1.5 часа',
            isSelected: false,
        },
        {
            id: 2,
            value: '2 часа',
            isSelected: true,
        },
    ]);

    function updateLessonsSelect(badge){
        let badges = [...lessonsSelect]
        let selectedBadge = badges.find((b) => b.id === badge.id)
        if(selectedBadge){
            selectedBadge.isSelected = !selectedBadge.isSelected
        }
        setLessonsSelect(badges)
    }

    function updateDurationSelect(badge){
        let badges = [...durationSelect]
        let selectedBadge = badges.find((b) => b.id === badge.id)
        if(selectedBadge){
            selectedBadge.isSelected = !selectedBadge.isSelected
        }
        setDurationSelect(badges)
    }


    return <Modal title={props.date.format("DD MMMM")} hasHeader={true} show={props.show} onClose={props.onClose}>
        <br/>
        <SettingsBlockWrapper title={"Предмет:"}>
            <BadgesSelector items={lessonsSelect} onSelect={updateLessonsSelect}/>
        </SettingsBlockWrapper>
        <SettingsBlockWrapper title={"Предмет:"}>
            <BadgesSelector items={durationSelect} onSelect={updateDurationSelect}/>
        </SettingsBlockWrapper>
        <SettingsBlockWrapper title={"Начало:"}>
            <TimeSelect getAvailableHours={() => [1,2,3]} getAvailableMinutes={() => [1,2,3]} onSelectTime={alert}/>
        </SettingsBlockWrapper>
        <Button text={"Сохранить"} type={ButtonType.GREEN} onClick={() => props.onSave()}/>
    </Modal>
}