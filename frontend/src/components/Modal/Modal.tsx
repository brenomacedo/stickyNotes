import React from 'react'
import './Modal.css'
import { FiX } from 'react-icons/fi'

interface IModal {
    handleModal(): void
    modal: boolean
}

const Modal: React.FC<IModal> = props => {
    return (
        <div className="modal" style={{ display: props.modal ? 'flex' : 'none' }}>
            <div className="addNote">
                <div className='modal-icon'>
                    <FiX onClick={props.handleModal} size={30} color='white' cursor='pointer' />
                </div>
                <textarea></textarea>
                <button onClick={() => {}}>ADICIONAR</button>
            </div>
        </div>
    )
}

export default Modal