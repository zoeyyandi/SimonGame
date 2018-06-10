import { combineReducers } from 'redux';
import controlButtons from './controls';
import patterns from './patterns';

const rootReducer = combineReducers({
  controlButtons,
  patterns
});

export default rootReducer;
