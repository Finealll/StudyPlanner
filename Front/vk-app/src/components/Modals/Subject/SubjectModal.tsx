import './SubjectModal.css'
// @ts-ignore
import Modal, {ModalProps} from "../../Modal/Modal.tsx";
// @ts-ignore
import {Warning} from "../../Warning/Warning.tsx";
// @ts-ignore
import {Button, ButtonType} from "../../Buttons/Button.tsx";
// @ts-ignore
import React from "react";

interface AddSubjectModalProps extends ModalProps{
    title: string,

    onSave: () => void;
}

export const SubjectModal = (props: AddSubjectModalProps) => {
    return <Modal title={props.title} hasHeader={true} show={props.show} onClose={props.onClose}>
        test
    </Modal>
}