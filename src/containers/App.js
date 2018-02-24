import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import DashboardPage from './DashboardPage'
import MyQuestionsPage from './MyQuestionsPage'

class App extends Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="%s - SIAC" />
        <div>
          <Route path="/" component={DashboardPage} />
          <Route path="/questoes" component={MyQuestionsPage} />
        </div>
      </div>
    )
  }
}

export default App
