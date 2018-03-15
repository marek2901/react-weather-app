import { combineReducers } from 'redux'
import mainReducer from './weatherReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  main: mainReducer,
  form: formReducer
})
export default rootReducer;
