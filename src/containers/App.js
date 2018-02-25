import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import gql from 'graphql-tag'

import { Menu, Icon } from 'antd';

import AppLayout from 'components/AppLayout'

import DashboardPage from './DashboardPage'
import MyQuestionsPage from './MyQuestionsPage'

import { AUTH_TOKEN_KEY, AUTH_TOKEN_REFRESH_INTERVAL } from '../constants'

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const SiderMenu = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="home" />
        <span>Início</span>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={<span><Icon type="book" /><span>Questões</span></span>}
      >
        <Menu.Item key="3">Nova</Menu.Item>
        <Menu.Item key="2">Salvas</Menu.Item>
        <Menu.Item key="4">Arquivadas</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={<span><Icon type="copy" /><span>Avaliações</span></span>}
      >
        <Menu.Item key="8">Nova</Menu.Item>
        <Menu.Item key="8">Salvas</Menu.Item>
        <Menu.Item key="8">Arquivadas</Menu.Item>
      </SubMenu>
      <Menu.Item key="9">
        <Icon type="file" />
        <span>Autoavaliações</span>
      </Menu.Item>
    </Menu>
  )
}

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
