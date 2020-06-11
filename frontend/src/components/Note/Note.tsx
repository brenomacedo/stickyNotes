import React from 'react'
import { FiPlus } from 'react-icons/fi'
import './Note.css'

const Note = () => {
    return (
        <div className="note">
            <div className="options">
                <FiPlus size={25} color='black' cursor='pointer' />
            </div>
        </div>
    )
}

export default Note