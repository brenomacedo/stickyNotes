import { gql } from 'apollo-server'

export default gql`
    type Task {
        id: Int
        description: String
    }

    type Query {
        tasks: [Task!]!
    }

    type Mutation {
        tasks(description: String!): Task!,
    }
`