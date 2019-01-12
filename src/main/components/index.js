import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../styles/index.css'

import AppBar from '../../app-bar/components'

import Home from '../../home/components/index'
import ForDay from '../../for-day/components/index'

const Main = () => (
  <div className="App">
    <AppBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/for-day/:location/:date" component={ForDay} />
    </Switch>
  </div>
)

export default Main
