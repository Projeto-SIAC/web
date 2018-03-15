import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import gql from 'graphql-tag'
import styled from 'styled-components'

import AppLayout from 'components/AppLayout'

import { Spin } from 'antd';

import DashboardPage from './DashboardPage'
import MyQuestionsPage from './MyQuestionsPage'

import { AUTH_TOKEN_KEY, AUTH_TOKEN_REFRESH_INTERVAL } from '../constants'


const Loading = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  align-items: center;
  justify-content: center;
`

class App extends Component {

  getChildContext = () => {
    return {
      user: this.props.meQuery.me
    }
  }

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
    if (this.props.meQuery.loading) {
      return (
        <Loading>
          <Spin size="large" />
        </Loading>
      )
    }

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

App.childContextTypes = {
  user: PropTypes.object
}

const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshTokenMutation($token: String!) {
    refreshToken(token: $token) {
      token
    }
  }
`

const ME_QUERY = gql`
  query Me {
    me {
      username
      firstName
      lastName
      email
      isStaff
      isTeacher
    }
  }
`

export default compose(
  graphql(REFRESH_TOKEN_MUTATION, { name: 'refreshTokenMutation' }),
  graphql(ME_QUERY, { name: 'meQuery' }),
)(App)
