import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import './index.css'

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
        <p className="App-intro">
          <Router>
            <React.Fragment>
              <Route exact path="/" component={Home}/>
              <Route path="/sobre" component={About}/>
            </React.Fragment>
          </Router>
        </p>
      </div>
    )
  }
}

export default App
