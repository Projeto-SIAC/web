import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'

import './index.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/entrar" component={Login} />
      <PrivateRoute component={App} redirectTo="/entrar" />
    </Switch>
  </Router>,
  document.getElementById('root'))
registerServiceWorker()