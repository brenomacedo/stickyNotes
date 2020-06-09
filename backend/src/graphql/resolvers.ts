import { getConnectionManager } from 'typeorm'
import Tasks from '../entities/Tasks'

const Users = [
    { description: 'Breno', id: 0 },
    { description: 'Macedo', id: 1 }
]

interface Task {
    description: string
}

export default {
    Query: {
        getTasks: async () => {
            const tasksRepository = getConnectionManager().get().getRepository(Tasks)
            const tasks = await tasksRepository.find()
            return tasks
        }
    },

    Mutation: {
        createTask: async (root: any, { description }: Task ) => {
            const tasksRepository = getConnectionManager().get().getRepository(Tasks)
            const Task = await tasksRepository.insert({
                description: description
            })
            return { ...Task }
        },
        deleteTask: async (root: any, { id }: { id: number }) => {
            const tasksRepository = getConnectionManager().get().getRepository(Tasks)
            const Task = await tasksRepository.delete({ id })
            return { id }
        }
    }
}