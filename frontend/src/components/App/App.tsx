import React from 'react'
import './App.css'
import Note from '../Note/Note'

const App = () => {
    return (
        <div className="app">
             <h3>Sticky Notes</h3>
             <div className="notes">
                <Note />
             </div>
        </div>
    )
}

export default App