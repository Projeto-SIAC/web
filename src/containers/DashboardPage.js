import React from 'react'
import { Link } from 'react-router-dom'

import { Breadcrumb, Icon, Row, Col } from 'antd'
import PageLayout from 'components/PageLayout'
import IconCard from 'components/IconCard'

const DashboardPage = () => {
  return (
    <PageLayout breadcrumb={() => <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
        <Breadcrumb.Item>Ínicio</Breadcrumb.Item>
      </Breadcrumb>
    }>
      <h1>O que vamos fazer?</h1>
      <Row type="flex" justify="space-around" align="middle" gutter={24} style={{minHeight: 200}}>
        <Col span={24} md={12} lg={6} style={{padding: '0.5rem 0.5rem'}}><IconCard title="Realizar autoavaliação" type="file-text" size={36} /></Col>
        <Col span={24} md={12} lg={6} style={{padding: '0.5rem 0.5rem'}}><IconCard title="Nova avaliação" type="file-add" size={36} /></Col>
        <Col span={24} md={12} lg={6} style={{padding: '0.5rem 0.5rem'}}><IconCard title="Nova questão" type="plus-circle-o" size={36}/></Col>
        <Col span={24} md={12} lg={6} style={{padding: '0.5rem 0.5rem'}}><IconCard title="Minhas questões" type="folder" size={36} /></Col>
      </Row>
    </PageLayout>
  )
}

export default DashboardPage
