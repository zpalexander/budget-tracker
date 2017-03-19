import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import meta from './meta.reducer';
import purchases from './purchases.reducer';
import ui from './ui.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  meta,
  purchases,
  ui,
});

export default rootReducer;
