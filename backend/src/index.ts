import { ApolloServer, gql } from 'apollo-server'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema'
import path from 'path'
import './database/database'

const app = new ApolloServer({
    typeDefs, resolvers
})

app.listen(3333)