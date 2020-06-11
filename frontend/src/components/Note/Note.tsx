import React from 'react'
import { FiX } from 'react-icons/fi'
import './Note.css'

const Note = () => {
    return (
        <div className="note">
            <div className="options">
                <FiX size={25} color='black' cursor='pointer' />
            </div>
            <div className="description">
                <h4>ola mundo</h4>
            </div>
        </div>
    )
}

export default Note