import {ReactChild, ReactFragment, ReactPortal} from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export interface ModalProps {
    show: boolean;
    title?: string;
    hasHeader?: boolean;
    maxWidth?: string;
    children?: boolean | ReactChild | ReactFragment | ReactPortal;
    onClose?: () => void;
}

const Modal = (props: ModalProps) => {
    if (!props.show) {
        return null;
    }

    function onClose()  {
        //document.body.style.overflow = ''
        props.onClose();
    }

    const rootPortal = document.getElementById('modal-root')
    //document.body.style.overflow = 'hidden'

    return ReactDOM.createPortal(
        <div className="modal-wrapper">
            <div className="modal-subwrapper">
                <div style={{maxWidth: props.maxWidth}} className="modal">
                    {props.hasHeader ? <div className="modal-header">
                        <div className="modal-header__title">{props.title}</div>
                        <div className="modal-header__close" onClick={onClose}/>
                    </div> : <></>}

                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
        , rootPortal
    );
};

export default Modal;