import { combineReducers } from 'redux';
import meta from './meta.reducer';
import purchases from './purchases.reducer';
import ui from './ui.reducer';

const rootReducer = combineReducers({
  meta,
  purchases,
  ui,
});

export default rootReducer;
