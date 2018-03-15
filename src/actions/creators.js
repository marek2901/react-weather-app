import {
  REQUEST_SUCCESS_MAIN_WEATHER_DATA,
  REQUEST_FAILURE_MAIN_WEATHER_DATA,
  REQUEST_MAIN_WEATHER_DATA
} from './types'

export function triggerMainReq() {
  return {
    type: REQUEST_MAIN_WEATHER_DATA
  }
}

export function mainReqSuccess(data){
  return {
    type: REQUEST_SUCCESS_MAIN_WEATHER_DATA,
    data
  }
}

export function mainReqFailure(message){
  return {
    type: REQUEST_FAILURE_MAIN_WEATHER_DATA,
    message
  }
}
