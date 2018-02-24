import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import Auth from 'utils/auth'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Form = styled.form`
  max-width: 300px;
`

export default class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <Container>
        <h1>SIAC</h1>
        <Form>
          <button onClick={() => Auth.authenticate(() => this.setState({redirectToReferrer: true}))}>Login</button>
        </Form>
      </Container>
    )
  }
}