import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import App from './App'
import { apolloClient } from '@lib/apollo-client'
import { Mode } from '@common/types/mode'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement
const appRoot = createRoot(rootElement)
const app = (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
)

appRoot.render(
  import.meta.env.MODE === Mode.DEV ? <StrictMode>{app}</StrictMode> : app
)
