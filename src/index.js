import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { ApolloLink } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import registerServiceWorker from './registerServiceWorker'

import { GRAPHQL_URI, AUTH_TOKEN_KEY } from './constants'

import PrivateRoute from './components/PrivateRoute'

import App from './containers/App'
import LoginPage from './containers/LoginPage'

import 'antd/dist/antd.css'


const httpLink = new HttpLink({ uri: GRAPHQL_URI })

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  const authorizationHeader = token ? `JWT ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/entrar" component={LoginPage} />
        <PrivateRoute component={App} redirectTo="/entrar" />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()