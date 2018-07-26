import { combineReducers } from 'redux';
import { DATA_AVAILABLE } from "../actions/";

let dataState = { data: [], loading:true };

const dataReducer = (state = dataState, action) => {
  return state;
};

const rootReducer = combineReducers({
  dataReducer
});

export default rootReducer;
