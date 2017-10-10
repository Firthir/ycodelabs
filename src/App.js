import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GithubCorner from './components/GithubCorner'

import Stars from './components/Stars'

import Welcome from './views/Welcome'

import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import globalStyles from './globalStyles'

class App extends Component {
  componentWillMount () {
    globalStyles()
  }

  render () {
    return (
      <Router>
        <div>
          <Stars />
          <Welcome />
        </div>
      </Router>
    )
  }
}

export default App
