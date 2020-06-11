import React from 'react'
import { FiX } from 'react-icons/fi'
import './Note.css'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

interface INote {
    id: number
    description: string
    refetch(): void
}

const Note: React.FC<INote> = props => {

    const DELETE_TASK = gql`
        mutation deleteTask($id: Int!) {
            deleteTask(id: $id) {
                id
            }
        }
    `

    const [deleteTask] = useMutation(DELETE_TASK)

    const handleDeleteTask = () => {
        deleteTask({
            variables: {
                id: props.id
            }
        })

        props.refetch()
    }

    return (
        <div className="note">
            <div className="options">
                <FiX size={25} color='black' cursor='pointer' onClick={handleDeleteTask} />
            </div>
            <div className="description">
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default Note