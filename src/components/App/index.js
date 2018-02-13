import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import Home from '../Home'
import About from '../About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home}/>
            <Route path="/sobre" component={About}/>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App
