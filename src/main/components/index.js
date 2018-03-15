import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/index.css';

import {connect} from 'react-redux'

import {triggerHelloWorld} from '../../actions/creators'

import PropTypes from 'prop-types'

import AppBar from '../../appBar/components'

class Main extends Component {
  handleButtonClick() {
    let action = triggerHelloWorld('triggered')
    this.props.dispatch(action)
  }

  render() {
    return (<div className="App">
      <AppBar/>
      <ul>
        {
          this.props.records.map((record, index) => (<li key={index}>
            {record.text}
          </li>))
        }
      </ul>
      <RaisedButton onClick={this.handleButtonClick.bind(this)} label='XDD'/>
    </div>);
  }
}

Main.propTypes = {
  weatherRecords: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => {
  return {records: state.weatherRecords}
}

Main = connect(mapStateToProps)(Main)

export default Main;
