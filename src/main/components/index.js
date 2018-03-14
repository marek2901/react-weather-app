import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/index.css';

import AppBar from '../../appBar/components'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <p className="App-intro">
          <RaisedButton label='XDD'/>
        </p>
      </div>
    );
  }
}

export default Main;
