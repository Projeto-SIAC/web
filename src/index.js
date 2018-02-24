import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import PrivateRoute from './components/PrivateRoute'

import App from './containers/App'
import LoginPage from './containers/LoginPage'

import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/entrar" component={LoginPage} />
      <PrivateRoute component={App} redirectTo="/entrar" />
    </Switch>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()