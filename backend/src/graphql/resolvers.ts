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
        tasks: () => {
            const tasksRepository = getConnectionManager().get().getRepository(Tasks)
        }
    },

    Mutation: {
        tasks: async (root: any, { description }: Task ) => {
            const tasksRepository = getConnectionManager().get().getRepository(Tasks)
            const Task = await tasksRepository.insert({
                description: description
            })

            return Task
        }
    }
}