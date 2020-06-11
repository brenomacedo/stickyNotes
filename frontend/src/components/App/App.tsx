import React, { useState } from 'react'
import './App.css'
import Note from '../Note/Note'
import Modal from '../Modal/Modal'
import { FiPlus } from 'react-icons/fi'

const App = () => {

    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="app">
             <div className="top-bar">
                <h3>Sticky Notes</h3>
                <div className='app-icon'>
                    <FiPlus onClick={handleModal} cursor='pointer' color='white' size={30} />
                </div>
             </div>
             <div className="notes">
                <Note />
                <Note />
             </div>
             <Modal modal={modal} handleModal={handleModal} />
        </div>
    )
}

export default App