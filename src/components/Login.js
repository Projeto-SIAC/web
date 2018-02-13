import React, { Component } from 'react'
import Auth from '../helpers/auth'
import { Redirect } from 'react-router-dom'

import './Login.css'

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
      <div className="Login-container">
        <h1>SIAC</h1>
        <form className="Login-form">
          <button onClick={() => Auth.authenticate(() => this.setState({redirectToReferrer: true}))}>Login</button>
        </form>
      </div>
    )
  }
}