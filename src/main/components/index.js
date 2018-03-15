import React, {Component} from 'react';
import '../styles/index.css';

import {connect} from 'react-redux'

import {triggerMainReq} from '../../actions/creators'

import PropTypes from 'prop-types'

import AppBar from '../../appBar/components'
import MainWeatherTable from '../widgets/main-weather-table'
import CitySearch from './city-search'

class Main extends Component {
  handleButtonClick = () => {
    this.props.dispatch(triggerMainReq())
  }

  render() {
    return (<div className="App">
      <AppBar/>
      <CitySearch />
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
  return {records: state.main.weatherRecords}
}

Main = connect(mapStateToProps)(Main)

export default Main;
