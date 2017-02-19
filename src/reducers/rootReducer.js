import {combineReducers} from 'redux';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  users: UserReducer
});

export default rootReducer;
