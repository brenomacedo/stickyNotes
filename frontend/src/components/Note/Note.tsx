import React from 'react'
import { FiX } from 'react-icons/fi'
import './Note.css'

interface INote {
    id: number
    description: string
}

const Note: React.FC<INote> = props => {
    return (
        <div className="note">
            <div className="options">
                <FiX size={25} color='black' cursor='pointer' />
            </div>
            <div className="description">
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default Note