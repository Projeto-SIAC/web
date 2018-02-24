import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import DashboardPage from './DashboardPage'
import MyQuestionsPage from './MyQuestionsPage'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={DashboardPage} />
        <Route path="/questoes" component={MyQuestionsPage} />
      </div>
    )
  }
}

export default App
