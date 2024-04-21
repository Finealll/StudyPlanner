import './SubjectModal.css'
// @ts-ignore
import Modal, {ModalProps} from "../../Modal/Modal.tsx";
// @ts-ignore
import {Warning} from "../../Warning/Warning.tsx";
// @ts-ignore
import {Button, ButtonType} from "../../Buttons/Button.tsx";
// @ts-ignore
import React, {useState} from "react";
// @ts-ignore
import {SettingsBlockWrapper} from "../../SettingsBlockWrapper/SettingsBlockWrapper.tsx";
// @ts-ignore
import {IntegrationInfo} from "../../IntegrationInfo/IntegrationInfo.tsx";
// @ts-ignore
import {Input, InputType} from "../../Input/Input.tsx";
// @ts-ignore
import {BadgesSelector} from "../../BadgesSelector/BadgesSelector.tsx";

interface AddSubjectModalProps extends ModalProps{
    title: string,

    onSave: () => void;
}

export const SubjectModal = (props: AddSubjectModalProps) => {
    const [badgesMock, setBadgesMock] = useState([
        {
            id: 1,
            value: '30 минут',
            isSelected: true,
        },
            {
                id: 2,
                value: '45 минут',
                isSelected: true,
            },
            {
                id: 3,
                value: '1 час',
                isSelected: false,
            },
            {
                id: 4,
                value: '1 час 15 минут',
                isSelected: false,
            },
            {
                id: 5,
                value: '2 часа',
                isSelected: false,
            }
        ]);

    function updateBadgesMock(badge){
        let badges = [...badgesMock]
        let selectedBadge = badges.find((b) => b.id === badge.id)
        if(selectedBadge){
            selectedBadge.isSelected = !selectedBadge.isSelected
        }
        setBadgesMock(badges)
    }

    return <Modal title={props.title} hasHeader={true} show={props.show} onClose={props.onClose}>
        <br/>
        <SettingsBlockWrapper title={"Наименование:"}>
            <Input style={InputType.BLACK} onSubmit={() => alert("alert")}/>
        </SettingsBlockWrapper>
        <SettingsBlockWrapper title={"Интервалы:"}>
            <BadgesSelector items={badgesMock} onSelect={updateBadgesMock} />
        </SettingsBlockWrapper>
        <Button text={"Сохранить"} type={ButtonType.GREEN} onClick={() => props.onSave()}/>
    </Modal>
}