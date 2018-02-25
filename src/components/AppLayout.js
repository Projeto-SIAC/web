import React, { Component } from 'react'
import styled from 'styled-components'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import LogoSrc from 'assets/images/logo.svg'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu


const Logo = styled.img`
  height: 32px;
  margin: 16px auto;
  display: block;
`


class AppLayout extends React.Component {
  state = {
    collapsed: false
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Logo src={LogoSrc} />
        </Header>
        <Content style={{ padding: '0 1rem' }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Feito com <Icon type="heart" />
        </Footer>
      </Layout>
    )
  }
}

export default AppLayout
