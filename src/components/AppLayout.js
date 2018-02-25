import React from 'react'
import styled from 'styled-components'
import { Layout, Icon } from 'antd'

import LogoSrc from 'assets/images/logo.svg'

const { Header, Content, Footer } = Layout

const Logo = styled.img`
  height: 32px;
  margin: 16px auto;
  display: block;
`

const AppLayout = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Logo src={LogoSrc} />
      </Header>
      <Content style={{ padding: '0 1rem' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Feito com <Icon type="heart" />
      </Footer>
    </Layout>
  )
}

export default AppLayout
