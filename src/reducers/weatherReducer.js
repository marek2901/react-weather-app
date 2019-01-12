import { REQUEST_SUCCESS_MAIN_WEATHER_DATA } from '../actions/types'

const initialState = {
  weatherRecords: []
}
function weatherAppReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SUCCESS_MAIN_WEATHER_DATA:
      return Object.assign({}, state, {
        weatherRecords: action.data.data.list.map(item => {
          return {
            temp: item.main.temp,
            data: item.dt_txt,
            weather: item.weather[0].description,
            wind: item.wind.speed
          }
        })
      })
    default:
      return state
  }
}

export default weatherAppReducer
