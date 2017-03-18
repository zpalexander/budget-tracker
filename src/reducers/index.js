import { combineReducers } from 'redux';
import meta from './meta';
import purchases from './purchases';
import ui from './ui';

const rootReducer = combineReducers({
  meta,
  purchases,
  ui,
});

export default rootReducer;
