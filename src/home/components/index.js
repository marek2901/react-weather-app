import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import MainWeatherTable from '../widgets/main-weather-table'
import CitySearch from './city-search'

class Home extends Component {
  openForDay = date => {
    this.props.history.push(`/for-day/${this.props.location}/${date}`)
  }

  render() {
    return (
      <div>
        <CitySearch />
        <MainWeatherTable
          onItemClicked={this.openForDay}
          records={this.props.records}
        />
      </div>
    )
  }
}

Home.propTypes = {
  location: PropTypes.string.isRequired,
  records: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.number.isRequired,
      data: PropTypes.string.isRequired,
      weather: PropTypes.string.isRequired,
      wind: PropTypes.number.isRequired
    })
  )
}

// TODO: reqrite saga to fill location value after succesgul response, and use
// TODO: this value instaed form one
const locationVal = state => {
  try {
    return state.form.citySearchForm.values.location
  } catch (e) {
    return 'London'
    // eslint-disable-next-line
  }
}

const mapStateToProps = state => {
  return { location: locationVal(state), records: state.main.weatherRecords }
}

Home = connect(mapStateToProps)(Home)

export default Home
