import React, { Component } from 'react'
import styled from 'styled-components'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import LogoSrc from 'assets/images/logo.svg'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

const PageLayout = ({breadcrumb, children}) => {
  return (
    <div style={{maxWidth: 720, margin: '0 auto'}}>
      {breadcrumb()}
      <div style={{ background: '#fff', padding: 24, borderRadius: '0.2rem' }}>
        {children}
      </div>
    </div>
  )
}

export default PageLayout
