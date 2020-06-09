import { gql } from 'apollo-server'

export default gql`
    type Task {
        id: Int
        description: String
    }
    
    type Id {
        id: Int
    }

    type Query {
        getTasks: [Task!]!
    }

    type Mutation {
        createTask(description: String!): Task!
        deleteTask(id: Int!): Id!
    }
`