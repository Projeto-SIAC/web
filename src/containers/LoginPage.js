import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { 
  Button,
  Divider,
  Form, 
  Icon,
  Input,
} from 'antd'

import Auth from 'utils/auth'

import LogoSrc from 'assets/images/logo.svg'


const FormItem = Form.Item;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f5f5f5;
`

const Box = styled.main`
  width: 20rem;
  box-shadow: 0rem 0.5rem 1.5rem -0.25rem rgba(25,25,35,0.25);
  border-radius: 0.35rem;
  padding: 2.5rem;
  background-color: #fff;
`

const FixedButton = styled(Button)`
  width: 100%
`

const PlaceholderIcon = styled(Icon)`
  color: rgba(0,0,0,.25);
`

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 3rem;
  width: 3rem;
`

class LoginPage extends Component {
  state = {
    redirectToReferrer: false
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) console.log('Received values of form: ', values)
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } }
    const { redirectToReferrer } = this.state
    const { getFieldDecorator } = this.props.form

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <Container>
        <Box>
          <Image src={LogoSrc} alt="Logo do SIAC" />
          <Divider />
          <Form onSubmit={this.handleSubmit}>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [{required: true, message: 'Informe sua matrícula!'}]
              })(
                <Input prefix={<PlaceholderIcon type="user" />} placeholder="Matrícula" />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'Informe sua senha!'}]
              })(
                <Input prefix={<PlaceholderIcon type="lock" />} type="password" placeholder="Senha" />
              )}
            </FormItem>
            <FormItem>
              <FixedButton type="primary" htmlType="submit">
                Acessar
              </FixedButton>
            </FormItem>
          </Form>
        </Box>
      </Container>
    )
  }
}

export default Form.create()(LoginPage)