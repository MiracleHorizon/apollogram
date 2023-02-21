import { ApolloClient, InMemoryCache } from '@apollo/client'

import { SERVER_API } from '@common/utils/constants'

const uri = SERVER_API + '/graphql'
const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  uri,
  cache,
  name: 'Apollogram',
  credentials: 'include',
  connectToDevTools: true
})
