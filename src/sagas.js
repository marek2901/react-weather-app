import { all } from 'redux-saga/effects';

import homeSaga from './main/sagas';

export default function* rootSaga() {
  yield all([
    homeSaga()
  ])
}
