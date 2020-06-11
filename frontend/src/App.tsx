import React, { useEffect } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import MainApp from './components/App/App'




function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3333'
  })
  

  return (
    <ApolloProvider client={client}>
      <MainApp />
    </ApolloProvider>
  )
}

export default App
