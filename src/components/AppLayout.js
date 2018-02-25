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
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Logo src={LogoSrc} />
          {this.props.menu()}
        </Sider>
        <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            2018 <Icon type="copyright" /> Projeto SIAC
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default AppLayout
