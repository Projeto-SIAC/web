import React from 'react'
import { Link } from 'react-router-dom'

import { Breadcrumb, Icon } from 'antd'
import PageLayout from 'components/PageLayout'

const MyQuestionsPage = () => {
  return (
    <PageLayout breadcrumb={() => <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
      <Breadcrumb.Item>Questões</Breadcrumb.Item>
    </Breadcrumb>}>
      <h1>Questões</h1>
      <Link to='/'>Início</Link>
    </PageLayout>
  )
}

export default MyQuestionsPage
