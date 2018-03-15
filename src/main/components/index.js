import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import '../styles/index.css';

import {connect} from 'react-redux'

import {triggerMainReq} from '../../actions/creators'

import PropTypes from 'prop-types'

import AppBar from '../../appBar/components'
import MainWeatherTable from '../widgets/main-weather-table'

class Main extends Component {
  handleButtonClick = () => {
    this.props.dispatch(triggerMainReq())
  }

  render() {
    return (<div className="App">
      <AppBar/>
      <RaisedButton
        onClick={this.handleButtonClick}
        icon={<ActionSearch />}/>
      <MainWeatherTable records={this.props.records} />
    </div>);
  }
}

Main.propTypes = {
  weatherRecords: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.number.isRequired,
      data: PropTypes.string.isRequired,
      weather: PropTypes.string.isRequired,
      wind: PropTypes.number.isRequired,
    })
  )
}

const mapStateToProps = state => {
  return {records: state.weatherRecords}
}

Main = connect(mapStateToProps)(Main)

export default Main;
