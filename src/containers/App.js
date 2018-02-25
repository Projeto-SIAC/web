import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import gql from 'graphql-tag'

import AppLayout from 'components/AppLayout'

import DashboardPage from './DashboardPage'
import MyQuestionsPage from './MyQuestionsPage'

import { AUTH_TOKEN_KEY, AUTH_TOKEN_REFRESH_INTERVAL } from '../constants'

class App extends Component {

  _refreshToken = async () => {
    const oldToken = localStorage.getItem(AUTH_TOKEN_KEY);

    try {
      const result = await this.props.refreshTokenMutation({
        variables: { token: oldToken }
      })

      const { token } = result.data.refreshToken
      localStorage.setItem(AUTH_TOKEN_KEY, token)
    } catch (e) {
      //
    }

    this._refreshTokenLater();
  }

  _refreshTokenLater = () => {
    setTimeout(this._refreshToken, AUTH_TOKEN_REFRESH_INTERVAL)
  }

  componentDidMount() {
    this._refreshToken();
  }

  render() {
    return (
      <AppLayout>
        <Helmet titleTemplate="%s - SIAC" />
        <Switch>
          <Route path="/questoes" component={MyQuestionsPage} />
          <Route path="/" component={DashboardPage} />
        </Switch>
      </AppLayout>
    )
  }
}

const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshTokenMutation($token: String!) {
    refreshToken(token: $token) {
      token
    }
  }
`

export default graphql(REFRESH_TOKEN_MUTATION, { name: 'refreshTokenMutation' })(App)
