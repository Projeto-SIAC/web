import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router-dom'
import gql from 'graphql-tag'
import styled from 'styled-components'

import { 
  Button,
  Divider,
  Form, 
  Icon,
  Input,
  message
} from 'antd'

import { AUTH_TOKEN_KEY } from '../constants'

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
    redirectToReferrer: false,
    isLoading: false
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFields(async (err, values) => {
      if (err) return

      this.setState({isLoading: true})

      try {
        const result = await this.props.loginMutation({
          variables: values
        })
        const { token } = result.data.tokenAuth
        localStorage.setItem(AUTH_TOKEN_KEY, token)
        this.setState({ redirectToReferrer: true })
      } catch (e) {
        message.error('As credenciais inseridas não são válidas!')
        this.setState({isLoading: false})
      }

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
        <Helmet title="Identifique-se - SIAC" />
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
              <FixedButton type="primary" htmlType="submit" loading={this.state.isLoading}>
                Acessar
              </FixedButton>
            </FormItem>
          </Form>
        </Box>
      </Container>
    )
  }
}

const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!,$password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`

export default graphql(LOGIN_MUTATION, {name: 'loginMutation'})(Form.create()(LoginPage))