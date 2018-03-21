import React from 'react';
import { Switch, Route } from 'react-router-dom'
import '../styles/index.css';

import AppBar from '../../appBar/components'

import Home from '../../home/components/index'

const Main = () => <div className="App">
  <AppBar/>
  <Switch>
    <Route exact path='/' component={Home}/>
  </Switch>
</div>;

export default Main;
