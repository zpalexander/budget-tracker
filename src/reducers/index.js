import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user.reducer';
import purchases from './purchases.reducer';
import ui from './ui.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  purchases,
  ui,
  user,
});

export default rootReducer;
