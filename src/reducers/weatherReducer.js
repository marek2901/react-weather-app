import {
  HELLO_WORLD
} from '../actions/types';

const initialState = {
  location: '',
  weatherRecords: []
};
 
function weatherAppReducer(state = initialState, action) {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, {
        weatherRecords: [
          ...state.weatherRecords,
          {
            text: action.text
          }
        ]
      });
    default:
      return state;
  }
}

export default weatherAppReducer;
