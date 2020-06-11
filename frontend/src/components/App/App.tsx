import React, { useState, useEffect, useMemo } from 'react'
import './App.css'
import Note from '../Note/Note'
import Modal from '../Modal/Modal'
import { FiPlus } from 'react-icons/fi'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const App = () => {
    
    interface ITasks {
        id: number
        description: string
    }

    interface IQuery {
        getTasks: ITasks[]
    }

    const [modal, setModal] = useState(false)
    const [tasks, setTasks] = useState<ITasks[]>([])

    const GET_TASKS = gql`
        query {
            getTasks {
                id
                description
            }
        }
    `
    
    const { loading, error, data, refetch } = useQuery<IQuery>(GET_TASKS)

    if(loading) {
        return <h4>Loading...</h4>
    }

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
                {data?.getTasks.map(item => (
                    <Note {...item} key={item.id} />
                ))}
             </div>
             <Modal refetch={refetch} modal={modal} handleModal={handleModal} />
        </div>
    )
}

export default App