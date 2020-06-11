import React, { useState } from 'react'
import './Modal.css'
import { FiX } from 'react-icons/fi'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

interface IModal {
    handleModal(): void
    modal: boolean
    refetch(): void
}

const Modal: React.FC<IModal> = props => {

    const [newTask, setNewTask] = useState('')

    const ADD_TASK = gql`
        mutation CreateTask($description: String!) {
            createTask(description: $description) {
                description
            }
        }
    `

    const [addTask, { data: addTaskData }] = useMutation(ADD_TASK)

    const handleAddTask = () => {

        addTask({ variables: {
            description: newTask
        } })

        setNewTask('')
        props.refetch()
        props.handleModal()
    }

    return (
        <div className="modal" style={{ display: props.modal ? 'flex' : 'none' }}>
            <div className="addNote">
                <div className='modal-icon'>
                    <FiX onClick={() => {
                        props.handleModal()
                        setNewTask('')
                    }} size={30} color='white' cursor='pointer' />
                </div>
                <textarea value={newTask} onChange={e => setNewTask(e.target.value)}></textarea>
                <button onClick={() => handleAddTask()}>ADICIONAR</button>
            </div>
        </div>
    )
}

export default Modal