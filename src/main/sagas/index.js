import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'
import {
  mainReqFailure,
  mainReqSuccess
} from '../../actions/creators'
import {
  REQUEST_MAIN_WEATHER_DATA
} from '../../actions/types'

function* fetchWeatherData(action) {
  try {
    const response = yield call(
      fetch,
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        encodeURIComponent('London,us')
      }&appid=${'e921c956172c52a2728a7184e5a2394f'}`,
    );
    const data = yield call([response, response.json])
    yield put(mainReqSuccess({
      data: data
    }));
  } catch (e) {
    yield put(mainReqFailure(e.message));
  }
}

function* mainSaga() {
  yield takeLatest(REQUEST_MAIN_WEATHER_DATA, fetchWeatherData);
}

export default mainSaga;
