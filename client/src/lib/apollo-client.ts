import { ApolloClient, InMemoryCache } from '@apollo/client'

// const uri = `${process.env.SERVER_API}/graphql`
const uri = 'http://localhost:4200/graphql'
const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  uri,
  cache,
  credentials: 'include',
  connectToDevTools: true
})
