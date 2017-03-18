import {combineReducers} from 'redux';
import user from './user';
import meta from './meta';

const rootReducer = combineReducers({
  users: user,
  meta: meta,
});

export default rootReducer;
