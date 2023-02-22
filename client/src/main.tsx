import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import App from './App'
import { apolloClient } from '@lib/apollo-client'
import { STRICT_MODE } from '@utils/constants'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement
const appRoot = createRoot(rootElement)
const app = (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
)

appRoot.render(STRICT_MODE ? <StrictMode>{app}</StrictMode> : app)
