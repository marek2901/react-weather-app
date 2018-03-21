import React, {Component} from 'react';

import {connect} from 'react-redux'

import PropTypes from 'prop-types'

import MainWeatherTable from '../widgets/main-weather-table'
import CitySearch from './city-search'

class Home extends Component {
  render() {
    return  <div>
      <CitySearch />
      <MainWeatherTable records={this.props.records} />
    </div>
  }
}

Home.propTypes = {
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

Home = connect(mapStateToProps)(Home)

export default Home;
